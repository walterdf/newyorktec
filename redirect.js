// Redirecionamento baseado na URL atual
const redirects = {
    '/produto1/1': 'https://outrosite.com/produto1/1',
    '/produto1/2': 'https://outrosite.com/produto1/2',
    '/produto2/1': 'https://outrosite.com/produto2/1'
  };
  
  const currentPath = window.location.pathname;
  
  if (redirects[currentPath]) {
    window.location.href = redirects[currentPath];
  }  