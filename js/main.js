/* ========================================
   DeepSight - Main JS
   Handles: nav, products render, i18n re-render, forms
   ======================================== */

(function() {
  'use strict';

  /* ---------- Mobile Nav Toggle ---------- */
  function initNavToggle() {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        menu.classList.toggle('open');
      });
    }
  }

  /* ---------- Navbar Scroll Shadow ---------- */
  function initNavScroll() {
    var navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  }

  /* ---------- Scroll to Top ---------- */
  function initScrollTop() {
    var btn = document.querySelector('.float-btn.top');
    if (btn) {
      btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* ---------- Category Grid (Homepage) ---------- */
  function renderCategoryGrid() {
    var gridIC = document.getElementById('cat-grid-ic');
    var gridSD = document.getElementById('cat-grid-selfdev');
    if (!gridIC && !gridSD) return;

    var icCats = PRODUCT_CATEGORIES.filter(function(c) { return c.section === 'ic'; });
    var sdCats = PRODUCT_CATEGORIES.filter(function(c) { return c.section === 'selfdev'; });

    function makeCard(cat) {
      var count = getCategoryCount(cat.id);
      var isSelfDev = cat.section === 'selfdev';
      var rdBadge = isSelfDev ? '<span class="rd-badge"><span class="ico">🔬</span>R&D</span>' : '';
      return '<a href="products.html?cat=' + cat.id + '" class="category-card" style="text-decoration:none;color:inherit;">' +
        '<div class="icon">' + cat.icon + '</div>' +
        '<h3>' + t(cat.i18nKey) + rdBadge + '</h3>' +
        '<p>' + t(cat.i18nKey + '.desc') + '</p>' +
        '<span class="count">' + count + ' ' + (currentLang === 'zh' ? '款产品' : ' products') + '</span>' +
        '</a>';
    }

    if (gridIC) gridIC.innerHTML = icCats.map(makeCard).join('');
    if (gridSD) gridSD.innerHTML = sdCats.map(makeCard).join('');
  }

  /* ---------- Products Page ---------- */
  var productsCurrentCat = 'all';
  var productsSearchTerm = '';
  var productsSortBy = 'default';

  function getProductsFiltered() {
    var list = getProductsByCategory(productsCurrentCat);
    if (productsSearchTerm) {
      var term = productsSearchTerm.toLowerCase();
      list = list.filter(function(p) {
        return productName(p).toLowerCase().indexOf(term) >= 0 ||
               productDesc(p).toLowerCase().indexOf(term) >= 0;
      });
    }
    if (productsSortBy === 'name') {
      list = list.slice().sort(function(a, b) {
        return productName(a).localeCompare(productName(b));
      });
    } else if (productsSortBy === 'category') {
      list = list.slice().sort(function(a, b) {
        var ca = t(getCategoryById(a.cat).i18nKey);
        var cb = t(getCategoryById(b.cat).i18nKey);
        return ca.localeCompare(cb);
      });
    }
    return list;
  }

  function renderSidebar() {
    var sidebar = document.getElementById('cat-filter');
    if (!sidebar) return;
    var html = '<li><a href="products.html?cat=all" class="' + (productsCurrentCat === 'all' ? 'active' : '') + '">' +
      '<span data-i18n="products.all">' + t('products.all') + '</span>' +
      '<span class="count">' + PRODUCTS.length + '</span></a></li>';

    // IC section
    var icCats = PRODUCT_CATEGORIES.filter(function(c) { return c.section === 'ic'; });
    var sdCats = PRODUCT_CATEGORIES.filter(function(c) { return c.section === 'selfdev'; });

    html += '<li style="margin-top:12px;padding:4px 14px;font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:1px;">' + t('cat.section') + '</li>';
    icCats.forEach(function(cat) {
      var count = getCategoryCount(cat.id);
      html += '<li><a href="products.html?cat=' + cat.id + '" class="' + (productsCurrentCat === cat.id ? 'active' : '') + '">' +
        '<span>' + cat.icon + ' ' + t(cat.i18nKey) + '</span>' +
        '<span class="count">' + count + '</span></a></li>';
    });

    html += '<li style="margin-top:12px;padding:4px 14px;font-size:11px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:1px;">' + t('cat.section.selfdev') + '</li>';
    sdCats.forEach(function(cat) {
      var count = getCategoryCount(cat.id);
      html += '<li><a href="products.html?cat=' + cat.id + '" class="' + (productsCurrentCat === cat.id ? 'active' : '') + '">' +
        '<span>' + cat.icon + ' ' + t(cat.i18nKey) + '</span>' +
        '<span class="count">' + count + '</span></a></li>';
    });

    sidebar.innerHTML = html;
  }

  function renderProducts() {
    var grid = document.getElementById('product-grid');
    if (!grid) return;

    var list = getProductsFiltered();
    var resultInfo = document.getElementById('result-info');
    if (resultInfo) {
      resultInfo.innerHTML = t('products.result') + ' <strong>' + list.length + '</strong> ' + t('products.result.unit');
    }

    if (list.length === 0) {
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--gray-500);">' +
        '<div style="font-size:48px;margin-bottom:16px;">🔍</div>' +
        '<p>' + (currentLang === 'zh' ? '未找到相关产品' : 'No products found') + '</p></div>';
      return;
    }

    grid.innerHTML = list.map(function(p) {
      var cat = getCategoryById(p.cat);
      var isSelfDev = cat && cat.section === 'selfdev';
      var badgeHtml = '';
      if (p.badge === 'hot') {
        badgeHtml = '<span class="product-badge hot">HOT</span>';
      } else if (p.badge === 'new') {
        badgeHtml = '<span class="product-badge new">NEW</span>';
      }
      var cardClass = isSelfDev ? 'product-card self-dev' : 'product-card';
      return '<div class="' + cardClass + '">' +
        '<a href="product-detail.html?id=' + p.id + '" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;flex:1;">' +
        '<div class="product-img">' +
        badgeHtml +
        '<div class="placeholder">' + p.icon + '</div>' +
        '</div>' +
        '<div class="product-body">' +
        '<div class="product-category">' + cat.icon + ' ' + t(cat.i18nKey) + (isSelfDev ? ' <span class="rd-badge" style="font-size:10px;padding:2px 8px;"><span class="ico">🔬</span>R&D</span>' : '') + '</div>' +
        '<div class="product-name">' + productName(p) + '</div>' +
        '<div class="product-desc">' + productDesc(p) + '</div>' +
        '<div class="product-footer">' +
        '<span class="inquiry-btn">' + t('products.inquiry') + '</span>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '</div>';
    }).join('');
  }

  function initProductsPage() {
    var grid = document.getElementById('product-grid');
    if (!grid) return;

    // Read URL params
    var params = new URLSearchParams(window.location.search);
    productsCurrentCat = params.get('cat') || 'all';

    // Search
    var searchInput = document.getElementById('product-search');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        productsSearchTerm = this.value;
        renderProducts();
      });
    }

    // Sort
    var sortSelect = document.getElementById('product-sort');
    if (sortSelect) {
      sortSelect.addEventListener('change', function() {
        productsSortBy = this.value;
        renderProducts();
      });
    }

    // Update page title
    var pageTitle = document.getElementById('page-title');
    if (pageTitle && productsCurrentCat !== 'all') {
      var cat = getCategoryById(productsCurrentCat);
      if (cat) {
        pageTitle.textContent = t(cat.i18nKey);
      }
    }

    renderSidebar();
    renderProducts();
  }

  /* ---------- Product Detail Page ---------- */
  function renderProductDetail() {
    var container = document.getElementById('product-detail-container');
    if (!container) return;

    var params = new URLSearchParams(window.location.search);
    var productId = params.get('id');
    var product = getProductById(productId);

    if (!product) {
      container.innerHTML = '<div style="text-align:center;padding:80px 0;">' +
        '<div style="font-size:64px;margin-bottom:16px;">📦</div>' +
        '<h2 style="color:var(--gray-700);">' + (currentLang === 'zh' ? '产品未找到' : 'Product Not Found') + '</h2>' +
        '<a href="products.html" class="btn btn-primary mt-3" style="margin-top:24px;">' + (currentLang === 'zh' ? '返回产品列表' : 'Back to Products') + '</a>' +
        '</div>';
      return;
    }

    var cat = getCategoryById(product.cat);
    var isSelfDev = cat && cat.section === 'selfdev';

    // Specs table
    var specsHtml = product.specs.map(function(s) {
      return '<tr><th>' + t(currentLang === 'zh' ? s.zh : s.en) + '</th><td>' +
        (currentLang === 'zh' ? s.val.zh : s.val.en) + '</td></tr>';
    }).join('');

    // Related products
    var related = getRelatedProducts(product.cat, product.id, 4);
    var relatedHtml = related.map(function(p) {
      var rcat = getCategoryById(p.cat);
      return '<a href="product-detail.html?id=' + p.id + '" class="product-card" style="text-decoration:none;color:inherit;">' +
        '<div class="product-img"><div class="placeholder">' + p.icon + '</div></div>' +
        '<div class="product-body">' +
        '<div class="product-category">' + rcat.icon + ' ' + t(rcat.i18nKey) + '</div>' +
        '<div class="product-name">' + productName(p) + '</div>' +
        '</div></a>';
    }).join('');

    var rdBadge = isSelfDev ? '<span class="rd-badge" style="margin-left:8px;"><span class="ico">🔬</span>R&D</span>' : '';

    container.innerHTML =
      '<div class="breadcrumb-bar">' +
      '<a href="index.html">' + t('products.breadcrumb') + '</a>' +
      '<span class="sep">/</span>' +
      '<a href="products.html">' + t('nav.products') + '</a>' +
      '<span class="sep">/</span>' +
      '<a href="products.html?cat=' + product.cat + '">' + t(cat.i18nKey) + '</a>' +
      '<span class="sep">/</span>' +
      '<span style="color:var(--gray-800);">' + productName(product) + '</span>' +
      '</div>' +
      '<div class="product-detail">' +
        '<div class="product-gallery">' +
          '<div class="product-main-img">' + product.icon + '</div>' +
          '<div class="product-thumbs">' +
            '<div class="product-thumb active">' + product.icon + '</div>' +
            '<div class="product-thumb">' + product.icon + '</div>' +
            '<div class="product-thumb">' + product.icon + '</div>' +
            '<div class="product-thumb">' + product.icon + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="product-info">' +
          '<div class="product-tag">' + cat.icon + ' ' + t(cat.i18nKey) + '</div>' +
          '<h1>' + productName(product) + rdBadge + '</h1>' +
          '<p class="short-desc">' + productDesc(product) + '</p>' +
          '<div class="product-meta">' + specsHtml + '</div>' +
          '<div class="product-actions">' +
            '<a href="contact.html" class="btn btn-accent btn-lg">' + t('detail.inquiry') + '</a>' +
            '<a href="products.html" class="btn btn-outline-dark btn-lg">' + t('nav.products') + '</a>' +
          '</div>' +
          '<div class="product-trust">' +
            '<div class="trust-item"><span class="ico">✓</span><span>' + t('detail.trust1') + '</span></div>' +
            '<div class="trust-item"><span class="ico">✓</span><span>' + t('detail.trust2') + '</span></div>' +
            '<div class="trust-item"><span class="ico">✓</span><span>' + t('detail.trust3') + '</span></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="product-tabs">' +
        '<div class="tab-nav">' +
          '<button class="tab-btn active" data-tab="specs">' + t('detail.specs') + '</button>' +
          '<button class="tab-btn" data-tab="desc">' + t('detail.description') + '</button>' +
          '<button class="tab-btn" data-tab="inquiry">' + t('detail.inquiry') + '</button>' +
        '</div>' +
        '<div class="tab-content active" id="tab-specs">' +
          '<table class="specs-table">' + specsHtml + '</table>' +
        '</div>' +
        '<div class="tab-content" id="tab-desc">' +
          '<p style="font-size:15px;line-height:1.8;color:var(--gray-700);">' + productDesc(product) + '</p>' +
        '</div>' +
        '<div class="tab-content" id="tab-inquiry">' +
          '<form class="inquiry-form" onsubmit="return false;">' +
            '<div class="form-row">' +
              '<div class="form-group"><label>' + t('detail.form.name') + ' <span class="required">*</span></label><input type="text" required></div>' +
              '<div class="form-group"><label>' + t('detail.form.email') + ' <span class="required">*</span></label><input type="email" required></div>' +
            '</div>' +
            '<div class="form-group"><label>' + t('detail.form.phone') + '</label><input type="tel"></div>' +
            '<div class="form-group"><label>' + t('detail.form.message') + ' <span class="required">*</span></label><textarea required></textarea></div>' +
            '<button type="submit" class="btn btn-accent btn-lg" onclick="alert(\'' + t('detail.form.success') + '\')">' + t('detail.form.submit') + '</button>' +
          '</form>' +
        '</div>' +
      '</div>' +
      (related.length > 0 ?
        '<div class="related-products"><h2>' + t('detail.related') + '</h2><div class="product-grid" style="grid-template-columns:repeat(4,1fr);">' + relatedHtml + '</div></div>'
        : ''
      );

    // Init tabs
    var tabBtns = container.querySelectorAll('.tab-btn');
    tabBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        tabBtns.forEach(function(b) { b.classList.remove('active'); });
        container.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
        this.classList.add('active');
        var tabId = 'tab-' + this.getAttribute('data-tab');
        var tabContent = document.getElementById(tabId);
        if (tabContent) tabContent.classList.add('active');
      });
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function() {
    initNavToggle();
    initNavScroll();
    initScrollTop();
    renderCategoryGrid();
    initProductsPage();
    renderProductDetail();

    // Re-render on language change
    window.addEventListener('langChanged', function() {
      renderCategoryGrid();
      renderSidebar();
      renderProducts();
      renderProductDetail();
    });
  });

  // Expose for i18n.js to call
  window.renderProducts = renderProducts;
  window.renderProductDetail = renderProductDetail;
})();
