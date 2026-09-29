document.addEventListener('DOMContentLoaded', function () {
  var mobBtn = document.getElementById('mobMenuBtn');
  var mobMenu = document.getElementById('mobMenu');
  var mobCloseBtn = document.getElementById('mobMenuClose');
  function closeMobMenu(){ if(mobMenu){ mobMenu.classList.remove('open'); document.body.style.overflow=''; } }
  function openMobMenu(){ if(mobMenu){ mobMenu.classList.add('open'); document.body.style.overflow='hidden'; } }
  if (mobBtn) mobBtn.addEventListener('click', openMobMenu);
  if (mobCloseBtn) mobCloseBtn.addEventListener('click', closeMobMenu);
  document.querySelectorAll('#mobMenu nav a').forEach(function(a){ a.addEventListener('click', closeMobMenu); });

  var mobServBtn = document.getElementById('mobServBtn');
  var mobServPanel = document.getElementById('mobServPanel');
  var mobChevron = document.getElementById('mobChevron');
  if (mobServBtn) mobServBtn.addEventListener('click', function(){
    mobServPanel.classList.toggle('open');
    mobChevron.classList.toggle('rot');
  });

  var SERVICE_GROUPS = [
    { label: 'Operaciones Inmobiliarias', items: ['Compraventa de bienes inmuebles','Compraventa con crédito hipotecario','Régimen de propiedad en condominio','Lotificación y subdivisiones'] },
    { label: 'Crédito Hipotecario', items: ['Apertura de crédito con garantía hipotecaria','Cancelación de hipoteca'] },
    { label: 'Gobierno Corporativo', items: ['Constitución de sociedades','Protocolización de actas de asamblea','Fideicomisos'] },
    { label: 'Familia y Patrimonio', items: ['Planeación patrimonial','Sucesiones','Donaciones'] },
    { label: 'Poderes Notariales', items: ['Poderes notariales'] }
  ];

  document.querySelectorAll('.service-dd').forEach(function(dd){
    var trigger = dd.querySelector('.service-dd-trigger');
    var panel = dd.querySelector('.service-dd-panel');
    var label = dd.querySelector('.service-dd-label');
    var chevron = dd.querySelector('.service-dd-chevron');
    var hidden = dd.querySelector('.service-dd-value');
    SERVICE_GROUPS.forEach(function(g){
      var groupEl = document.createElement('div');
      groupEl.className = 'sd-group';
      groupEl.textContent = g.label;
      groupEl.addEventListener('click', function(){ selectService(g.label); });
      panel.appendChild(groupEl);
      g.items.forEach(function(it){
        var itemEl = document.createElement('div');
        itemEl.className = 'sd-item';
        itemEl.textContent = it;
        itemEl.addEventListener('click', function(){ selectService(it); });
        panel.appendChild(itemEl);
      });
    });
    function selectService(text){
      label.textContent = text;
      label.style.color = '#353535';
      if (hidden) hidden.value = text;
      panel.classList.remove('open');
      chevron.classList.remove('rot');
    }
    trigger.addEventListener('click', function(e){
      e.stopPropagation();
      panel.classList.toggle('open');
      chevron.classList.toggle('rot');
    });
    document.addEventListener('click', function(e){
      if (!dd.contains(e.target)) { panel.classList.remove('open'); chevron.classList.remove('rot'); }
    });
  });

  document.querySelectorAll('.contact-form').forEach(function(f){
    f.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Este formulario es una demostración visual: no hay un endpoint configurado para procesar el envío. Conecte este formulario a su proveedor de correo/CRM al migrar el sitio.');
    });
  });

  document.querySelectorAll('.faq-item').forEach(function(item){
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-answer');
    var icon = item.querySelector('.faq-icon');
    var qText = item.querySelector('.faq-q-text');
    q.addEventListener('click', function(){
      var isOpen = a.classList.toggle('open');
      icon.textContent = isOpen ? '\u2212' : '+';
      icon.classList.toggle('active-q', isOpen);
      qText.classList.toggle('active-q-text', isOpen);
    });
  });

  var popup = document.getElementById('homePopup');
  if (popup) {
    var shown = false;
    try { shown = sessionStorage.getItem('n103_popup_shown') === '1'; } catch(e){}
    if (!shown) {
      popup.style.display = 'flex';
      try { sessionStorage.setItem('n103_popup_shown','1'); } catch(e){}
    }
    document.querySelectorAll('.popup-close').forEach(function(btn){
      btn.addEventListener('click', function(){ popup.style.display = 'none'; });
    });
  }

  var track = document.getElementById('galleryTrack');
  if (track) {
    var slides = track.children;
    var idx = 0;
    var dotsWrap = document.getElementById('galleryDots');
    var dots = dotsWrap ? Array.prototype.slice.call(dotsWrap.children) : [];
    function update(){
      track.style.transform = 'translateX(-' + (idx * 100) + '%)';
      dots.forEach(function(d,i){ d.classList.toggle('active', i === idx); });
    }
    var prevBtn = document.getElementById('galleryPrev');
    var nextBtn = document.getElementById('galleryNext');
    if (prevBtn) prevBtn.addEventListener('click', function(){ idx = (idx - 1 + slides.length) % slides.length; update(); });
    if (nextBtn) nextBtn.addEventListener('click', function(){ idx = (idx + 1) % slides.length; update(); });
    dots.forEach(function(d,i){ d.addEventListener('click', function(){ idx = i; update(); }); });
    var touchStartX = null;
    var wrap = track.parentElement;
    wrap.addEventListener('touchstart', function(e){ touchStartX = e.touches[0].clientX; }, {passive:true});
    wrap.addEventListener('touchend', function(e){
      if (touchStartX === null) return;
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (dx < -40) { idx = (idx+1) % slides.length; update(); }
      else if (dx > 40) { idx = (idx-1+slides.length) % slides.length; update(); }
      touchStartX = null;
    }, {passive:true});
  }

  if (location.hash === '#contacto') {
    var el = document.getElementById('contacto');
    if (el) setTimeout(function(){ el.scrollIntoView({block:'start'}); }, 60);
  }
});
