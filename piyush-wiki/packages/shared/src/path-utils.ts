/**
 * Standardize path normalization for cross-platform support (Win32 & POSIX)
 */

export function normalizePath(filePath: string): string {
  return filePath.replace(/\\/g, '/').replace(/\/+/g, '/');
}

export function getFileExtension(filePath: string): string {
  const parts = filePath.split('.');
  return parts.length > 1 ? parts.pop()?.toLowerCase() || '' : '';
}

export function isMarkdownFile(filePath: string): boolean {
  const ext = getFileExtension(filePath);
  return ext === 'md' || ext === 'markdown';
}
