// Simple client-side renderer for content/projects.json
// - Loads /content/projects.json
// - Renders a responsive grid with optional images (local or external)
// - Supports search by title/description/tags
// - Use image paths like "assets/images/project1.jpg" or full URLs

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projects-grid');
  const search = document.getElementById('search');

  async function loadProjects(){
    try{
      const res = await fetch('/content/projects.json', {cache: 'no-cache'});
      if(!res.ok) throw new Error('Could not load projects.json');
      const data = await res.json();
      window._projects = Array.isArray(data) ? data : (data.projects || []);
      renderProjects(window._projects);
    }catch(err){
      console.error(err);
      grid.innerHTML = '<p style="color:var(--muted)">Failed to load projects. Make sure content/projects.json exists.</p>';
    }
  }

  function imageUrl(path){
    if(!path) return '';
    return path.startsWith('http://') || path.startsWith('https://') ? path : ('/' + path.replace(/^\//,''));
  }

  function placeholder(){
    // lightweight SVG placeholder as data URI
    const svg = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400"><rect width="100%" height="100%" fill="#08314a"/><text x="50%" y="50%" fill="#5fb3a7" font-size="24" text-anchor="middle" dominant-baseline="middle">No image</text></svg>');
    return 'data:image/svg+xml;charset=UTF-8,' + svg;
  }

  function renderProjects(list){
    if(!Array.isArray(list) || list.length===0){
      grid.innerHTML = '<p style="color:var(--muted)">No projects found. Edit <code>content/projects.json</code> to add projects.</p>';
      return;
    }
    grid.innerHTML = '';
    for(const p of list){
      const item = document.createElement('article');
      item.className = 'card';
      const media = document.createElement('div');
      media.className = 'media';
      if(p.image){
        const img = document.createElement('img');
        img.src = imageUrl(p.image);
        img.alt = p.title || 'Project image';
        img.loading = 'lazy';
        img.onerror = () => { img.src = placeholder(); };
        media.appendChild(img);
      }else{
        const img = document.createElement('img');
        img.src = placeholder();
        img.alt = 'No image';
        media.appendChild(img);
      }

      const h = document.createElement('h4'); h.textContent = p.title || 'Untitled';
      const desc = document.createElement('p'); desc.textContent = p.description || '';
      const meta = document.createElement('div'); meta.className = 'meta';
      if(p.tags && Array.isArray(p.tags)){ 
        p.tags.slice(0,6).forEach(t => {
          const span = document.createElement('span'); span.textContent = t; span.style.opacity = '0.9';
          meta.appendChild(span);
        });
      }
      if(p.year) {
        const year = document.createElement('span'); year.textContent = p.year; meta.appendChild(year);
      }

      const actions = document.createElement('div');
      if(p.url){
        const a = document.createElement('a'); a.href = p.url; a.className = 'cta'; a.textContent = 'View project'; a.target = '_blank'; a.rel='noopener noreferrer';
        actions.appendChild(a);
      } else if(p.repo){
        const a = document.createElement('a'); a.href = p.repo; a.className = 'cta'; a.textContent = 'Repository'; a.target = '_blank'; a.rel='noopener noreferrer';
        actions.appendChild(a);
      }

      item.appendChild(media);
      item.appendChild(h);
      item.appendChild(desc);
      item.appendChild(meta);
      item.appendChild(actions);
      grid.appendChild(item);
    }
  }

  function filter(q){
    if(!window._projects) return;
    q = (q||'').trim().toLowerCase();
    if(!q) return renderProjects(window._projects);
    const filtered = window._projects.filter(p => {
      const text = ((p.title||'') + ' ' + (p.description||'') + ' ' + (p.tags||[]).join(' ')).toLowerCase();
      return text.includes(q);
    });
    renderProjects(filtered);
  }

  search.addEventListener('input', (e) => filter(e.target.value));
  loadProjects();
});