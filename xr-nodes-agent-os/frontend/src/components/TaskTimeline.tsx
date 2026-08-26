import React, { useState, useEffect } from 'react';
import { Clock, Play, CheckCircle, XCircle, AlertCircle, ChevronDown, ChevronUp, Terminal } from 'lucide-react';

export default function TaskTimeline() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [filter, setFilter] = useState('all');
  const [expandedTask, setExpandedTask] = useState<string | null>(null);
  const [taskDetails, setTaskDetails] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await fetch('/api/v1/tasks');
      if (res.ok) {
        const data = await res.json();
        setTasks(Array.isArray(data) ? data : []);
      }
    } catch (e) {
      console.error('Failed to fetch tasks:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
    const interval = setInterval(fetchTasks, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchTaskDetails = async (taskId: string) => {
    try {
      const res = await fetch(`/api/v1/tasks/${taskId}`);
      if (res.ok) {
        const data = await res.json();
        setTaskDetails(prev => ({ ...prev, [taskId]: data }));
      }
    } catch (e) {
      console.error('Failed to fetch task details:', e);
    }
  };

  const toggleTask = (taskId: string) => {
    if (expandedTask === taskId) {
      setExpandedTask(null);
    } else {
      setExpandedTask(taskId);
      fetchTaskDetails(taskId);
    }
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'all') return true;
    return (t.status || '').toLowerCase() === filter;
  });

  const getStatusBadge = (status: string) => {
    switch ((status || '').toLowerCase()) {
      case 'running':
        return <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>RUNNING</span>;
      case 'completed':
        return <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"><CheckCircle className="w-3 h-3" />COMPLETED</span>;
      case 'failed':
        return <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-red-500/10 text-red-400 border border-red-500/30"><XCircle className="w-3 h-3" />FAILED</span>;
      default:
        return <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-zinc-800 text-zinc-300 border border-zinc-700"><Clock className="w-3 h-3" />CREATED</span>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass-panel p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-400" />
            Task Timeline
          </h2>
          
          <div className="flex items-center gap-2">
            {['all', 'running', 'completed', 'failed'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize ${
                  filter === f 
                    ? 'bg-zinc-800 text-white border border-zinc-700' 
                    : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:text-zinc-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center text-zinc-500 py-10 text-sm animate-pulse">Loading timeline...</div>
        ) : filteredTasks.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/30 rounded-xl border border-zinc-800/50 border-dashed">
            <AlertCircle className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-400 text-sm">No tasks dispatched yet.</p>
            <p className="text-zinc-500 text-xs mt-1">Go to Home to create a new task.</p>
          </div>
        ) : (
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
            {filteredTasks.map((task) => (
              <div key={task.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800 text-zinc-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                  {task.status === 'completed' ? <CheckCircle className="w-4 h-4 text-emerald-400" /> :
                   task.status === 'running' ? <Play className="w-3 h-3 text-cyan-400 ml-0.5" /> :
                   task.status === 'failed' ? <XCircle className="w-4 h-4 text-red-400" /> :
                   <Clock className="w-4 h-4" />}
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800/80 transition-colors shadow-sm cursor-pointer" onClick={() => toggleTask(task.id)}>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] text-zinc-500 font-mono truncate" title={task.id}>{task.id.substring(0, 8)}...</span>
                      {getStatusBadge(task.status)}
                    </div>
                    
                    <h3 className="text-sm font-semibold text-white leading-snug">{task.title || 'Untitled Task'}</h3>
                    
                    <div className="flex items-center justify-between text-xs text-zinc-500 font-mono mt-1">
                      <span>{new Date(task.created_at || Date.now()).toLocaleTimeString()}</span>
                      {expandedTask === task.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  {expandedTask === task.id && (
                    <div className="mt-4 pt-4 border-t border-zinc-800" onClick={e => e.stopPropagation()}>
                      <h4 className="text-xs font-bold text-zinc-400 uppercase mb-2 flex items-center gap-1.5">
                        <Terminal className="w-3 h-3" /> Output & Steps
                      </h4>
                      {taskDetails[task.id] ? (
                        <div className="bg-black/50 p-3 rounded-lg border border-zinc-800/50">
                           <pre className="text-[10px] text-zinc-300 font-mono whitespace-pre-wrap max-h-48 overflow-y-auto custom-scrollbar">
                             {taskDetails[task.id].output || JSON.stringify(taskDetails[task.id], null, 2)}
                           </pre>
                        </div>
                      ) : (
                        <div className="text-[10px] text-zinc-500 animate-pulse">Loading details...</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
