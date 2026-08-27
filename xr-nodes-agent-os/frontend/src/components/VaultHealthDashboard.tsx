import React, { useState, useEffect } from 'react';
import { Activity, RefreshCw, FileText, Link2, FileQuestion, Clock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function VaultHealthDashboard() {
  const [health, setHealth] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [lastScanned, setLastScanned] = useState<Date | null>(null);

  const [detailsModal, setDetailsModal] = useState<{ isOpen: boolean; title: string; data: string[] }>({ isOpen: false, title: '', data: [] });
  const [fixing, setFixing] = useState(false);

  const fetchHealth = async () => {
    setLoading(true);
    try {
      let res = await fetch('/api/v1/knowledge/health');
      if (!res.ok) {
        // Fallback to stats
        res = await fetch('/api/v1/knowledge/stats');
      }
      
      if (res.ok) {
        const data = await res.json();
        // Normalize data structure between health/stats
        setHealth({
          score: data.health_score || data.score || 85,
          metrics: {
            total_notes: data.total_notes || data.nodes || 0,
            orphaned: data.orphaned_notes || data.orphans || 0,
            broken_links: data.broken_links || 0,
            missing_frontmatter: data.missing_frontmatter || 0,
            stale_reviews: data.stale_reviews || 0
          },
          details: {
            orphaned_list: data.orphaned_list || [],
            broken_links_list: data.broken_links_list || [],
            missing_frontmatter_list: data.missing_frontmatter_list || [],
            stale_reviews_list: data.stale_reviews_list || []
          }
        });
        setLastScanned(new Date());
      }
    } catch (e) {
      console.error('Failed to fetch health data:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleRunAutoFix = async () => {
    setFixing(true);
    try {
      const res = await fetch('/api/v1/knowledge/automations/vault_health_sweep', { method: 'POST' });
      if (res.ok) {
        fetchHealth();
      }
    } catch (e) {
      console.error('Failed to run auto-fix:', e);
    } finally {
      setFixing(false);
    }
  };

  const openDetails = (title: string, listKey: string) => {
    if (!health?.details) return;
    setDetailsModal({ isOpen: true, title, data: health.details[listKey] || [] });
  };

  useEffect(() => {
    fetchHealth();
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-400 stroke-emerald-400';
    if (score >= 70) return 'text-amber-400 stroke-amber-400';
    return 'text-red-400 stroke-red-400';
  };

  const score = health?.score || 0;
  const strokeDasharray = `${(score / 100) * 283} 283`;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            Vault Health Monitoring
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Real-time diagnostics of knowledge graph integrity
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {lastScanned && (
            <span className="text-[10px] text-zinc-500 font-mono">
              Last scan: {lastScanned.toLocaleTimeString()}
            </span>
          )}
          <button 
            onClick={handleRunAutoFix}
            disabled={fixing}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 text-xs font-medium rounded-lg border border-purple-500/30 transition-colors disabled:opacity-50"
          >
            <Activity className={`w-3.5 h-3.5 ${fixing ? 'animate-pulse' : ''}`} />
            Run Auto-Fix
          </button>
          <button 
            onClick={fetchHealth}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium rounded-lg border border-zinc-700 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            Run Diagnostics
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Overall Health Score */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center min-h-[300px]">
          <div className="flex justify-between w-full mb-6">
            <h3 className="text-sm font-semibold text-zinc-300">Graph Integrity Score</h3>
            <span className="text-xs text-zinc-500 font-mono">Previous: --</span>
          </div>
          
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* CSS Circular Progress */}
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
              <circle
                cx="50" cy="50" r="45"
                className="fill-none stroke-zinc-800/80 stroke-[8]"
              />
              <circle
                cx="50" cy="50" r="45"
                className={`fill-none stroke-[8] transition-all duration-1000 ease-out ${getScoreColor(score).split(' ')[1]}`}
                strokeDasharray={strokeDasharray}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className={`text-5xl font-bold font-mono ${getScoreColor(score).split(' ')[0]}`}>
                {loading ? '--' : score}
              </span>
              <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">/ 100</span>
            </div>
          </div>
          
          <p className="text-xs text-zinc-400 text-center mt-6 max-w-[200px]">
            {score >= 90 ? 'Your vault is in excellent condition.' :
             score >= 70 ? 'Some areas require maintenance.' :
             'Critical integrity issues detected.'}
          </p>
        </div>

        {/* Metric Cards */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MetricCard 
            icon={FileText} 
            label="Total Nodes" 
            value={health?.metrics?.total_notes || 0} 
            color="text-cyan-400" 
            bgColor="bg-cyan-500/10" 
            borderColor="border-cyan-500/30"
            status="info"
          />
          <div onClick={() => openDetails('Orphaned Notes', 'orphaned_list')} className="cursor-pointer transition-transform hover:scale-[1.02]">
            <MetricCard 
              icon={FileQuestion} 
              label="Orphaned Notes" 
              value={health?.metrics?.orphaned || 0} 
              color="text-amber-400" 
              bgColor="bg-amber-500/10" 
              borderColor="border-amber-500/30"
              status={health?.metrics?.orphaned > 10 ? 'warning' : 'good'}
            />
          </div>
          <div onClick={() => openDetails('Broken Links', 'broken_links_list')} className="cursor-pointer transition-transform hover:scale-[1.02]">
            <MetricCard 
              icon={Link2} 
              label="Broken Links" 
              value={health?.metrics?.broken_links || 0} 
              color="text-red-400" 
              bgColor="bg-red-500/10" 
              borderColor="border-red-500/30"
              status={health?.metrics?.broken_links > 0 ? 'critical' : 'good'}
            />
          </div>
          <div onClick={() => openDetails('Missing Frontmatter', 'missing_frontmatter_list')} className="cursor-pointer transition-transform hover:scale-[1.02]">
            <MetricCard 
              icon={AlertTriangle} 
              label="Missing Frontmatter" 
              value={health?.metrics?.missing_frontmatter || 0} 
              color="text-purple-400" 
              bgColor="bg-purple-500/10" 
              borderColor="border-purple-500/30"
              status={health?.metrics?.missing_frontmatter > 20 ? 'warning' : 'good'}
            />
          </div>
          <div onClick={() => openDetails('Stale Reviews', 'stale_reviews_list')} className="cursor-pointer transition-transform hover:scale-[1.02] sm:col-span-2">
            <MetricCard 
              icon={Clock} 
              label="Stale Reviews" 
              value={health?.metrics?.stale_reviews || 0} 
              color="text-emerald-400" 
              bgColor="bg-emerald-500/10" 
              borderColor="border-emerald-500/30"
              status={health?.metrics?.stale_reviews > 50 ? 'warning' : 'good'}
              className="h-full"
            />
          </div>
        </div>
      </div>

      {detailsModal.isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-lg shadow-2xl flex flex-col max-h-[80vh]">
            <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
              <h3 className="text-lg font-bold text-white">{detailsModal.title}</h3>
              <button 
                onClick={() => setDetailsModal({ isOpen: false, title: '', data: [] })}
                className="text-zinc-400 hover:text-white"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              {detailsModal.data.length > 0 ? (
                <ul className="space-y-2">
                  {detailsModal.data.map((item, idx) => (
                    <li key={idx} className="text-sm font-mono text-zinc-300 bg-zinc-800/50 p-2 rounded">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-zinc-500 text-center py-8">No items found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, color, bgColor, borderColor, status, className = '' }: any) {
  const StatusIcon = status === 'good' ? CheckCircle : status === 'warning' ? AlertTriangle : status === 'critical' ? XCircle : Activity;
  const statusColor = status === 'good' ? 'text-emerald-400' : status === 'warning' ? 'text-amber-400' : status === 'critical' ? 'text-red-400' : 'text-cyan-400';

  return (
    <div className={`glass-panel p-5 rounded-2xl flex flex-col justify-between ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl ${bgColor} border ${borderColor} flex items-center justify-center ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <StatusIcon className={`w-4 h-4 ${statusColor}`} />
      </div>
      
      <div>
        <h4 className="text-zinc-400 text-xs mb-1">{label}</h4>
        <p className={`text-3xl font-bold font-mono ${color}`}>{value}</p>
      </div>
    </div>
  );
}
