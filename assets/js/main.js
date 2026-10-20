/**
 * ASTANA AVOCADO  Main JavaScript Engine
 * Handles WhatsApp link generation, variety filtering, gallery lightbox, 
 * navigation scroll effects, and accessibility helpers.
 */

(function () {
  'use strict';

  // PRD WhatsApp Constants
  const WA_NUMBER = '6281235305934';

  /**
   * Helper to generate consistent WhatsApp links with encoded text
   */
  function buildWhatsAppUrl(message) {
    const encoded = encodeURIComponent(message || 'Halo Astana Avocado, saya ingin bertanya tentang bibit alpukat.');
    return `https://wa.me/${WA_NUMBER}?text=${encoded}`;
  }

  // 1. Variety Catalog Data for Quick Detail Modal
  const VARIETY_DATA = {
    'miki': {
      name: 'Alpukat Miki',
      category: 'Dataran Rendah & Cepat Berbuah',
      image: 'assets/images/ALPUKAT-MIKI.webp',
      badge: 'Unggulan Dataran Rendah',
      desc: 'Alpukat Miki merupakan salah satu varietas paling digemari di Indonesia karena sangat adaptif di dataran rendah hingga sedang. Daging buahnya tebal, pulen tanpa serat, dan memiliki rasa gurih mentega yang legit. Tanaman ini dikenal rajin berbuah serta memiliki ketahanan alami yang relatif baik terhadap hama ulat buah.',
      specs: [
        { label: 'Adaptasi Ketinggian', val: 'Dataran Rendah – Sedang (10 – 600 mdpl)' },
        { label: 'Bobot Buah Rata-rata', val: '300 – 600 gram / buah' },
        { label: 'Tekstur Daging', val: 'Pulen legit, creamy, bebas serat kasar' },
        { label: 'Estimasi Mulai Belajar Berbuah', val: '2 – 3 tahun (bibit okulasi/sambung pucuk)' },
        { label: 'Karakter Pohon', val: 'Relatif tidak terlalu tinggi, cocok untuk kebun & pekarangan' }
      ]
    },
    'aligator': {
      name: 'Alpukat Aligator',
      category: 'Buah Jumbo & Tabulampot',
      image: 'assets/images/ALPUKAT-ALIGATOR.webp',
      badge: 'Ukuran Jumbo 1+ Kg',
      desc: 'Dikenal dengan bentuk buah unik yang memanjang mirip moncong aligator. Memiliki ukuran buah spektakuler yang bisa mencapai 800 gram hingga 1,3 kg per butir. Daging buahnya halus dengan kelembutan seperti mentega dan aroma yang harum. Sangat memikat dijadikan koleksi tabulampot maupun kebun buah.',
      specs: [
        { label: 'Adaptasi Ketinggian', val: 'Dataran Rendah hingga Tinggi (50 – 1.000 mdpl)' },
        { label: 'Bobot Buah Rata-rata', val: '800 gram – 1.3 kg / buah' },
        { label: 'Bentuk Buah', val: 'Lonjong memanjang piramidal' },
        { label: 'Tekstur Daging', val: 'Sangat creamy, lembut, legit' },
        { label: 'Estimasi Mulai Berbuah', val: '2.5 – 3.5 tahun' }
      ]
    },
    'hawai': {
      name: 'Alpukat Hawai',
      category: 'Rasa Manis Gurih Segar',
      image: 'assets/images/ALPUKAT-HAWAI.webp',
      badge: 'Bentuk Bulat Eksotis',
      desc: 'Alpukat Hawai memiliki bentuk buah bulat memikat dengan kulit hijau cerah yang halus. Tekstur daging buahnya sangat tebal dengan rongga biji yang rapat. Daging kuning mentega dengan sentuhan rasa manis-gurih khas yang sangat segar untuk dinikmati langsung atau diolah.',
      specs: [
        { label: 'Adaptasi Ketinggian', val: 'Dataran Rendah – Tinggi' },
        { label: 'Bobot Buah Rata-rata', val: '400 – 700 gram' },
        { label: 'Karakter Kulit', val: 'Hijau segar, bersih, mulus' },
        { label: 'Tekstur Daging', val: 'Tebal, padat, gurih beraroma lembut' },
        { label: 'Rekomendasi Tanam', val: 'Pekarangan rumah atau kebun produktif' }
      ]
    },
    'hass': {
      name: 'Alpukat Hass',
      category: 'Komersial Premium & Supermarket',
      image: 'assets/images/ALPUKAT-HASS.webp',
      badge: 'Standar Ekspor Dunia',
      desc: 'Alpukat Hass adalah standar emas komersial pasar global. Kulitnya bertekstur bintil dan berubah menjadi keunguan-hitam saat matang sempurna. Memiliki kadar minyak alami tertinggi, tekstur buttery yang sangat kaya, serta daya simpan pasca-panen yang paling kuat.',
      specs: [
        { label: 'Adaptasi Ketinggian', val: 'Dataran Sedang – Tinggi (600 – 1.500+ mdpl)' },
        { label: 'Bobot Buah Rata-rata', val: '200 – 350 gram (standar pasar ekspor)' },
        { label: 'Kadar Minyak', val: 'Sangat tinggi (kaya lemak nabati baik)' },
        { label: 'Daya Simpan', val: 'Sangat lama pasca petik' },
        { label: 'Target Pasar', val: 'Restoran premium, hotel, pasar modern ekspor' }
      ]
    },
    'wina': {
      name: 'Alpukat Wina',
      category: 'Lokal Unggul Produktivitas Tinggi',
      image: 'assets/images/ALPUKAT-WINA.webp',
      badge: 'Lokal Super Produktif',
      desc: 'Varietas unggul kebanggaan lokal yang terkenal akan dompolan buahnya yang sangat lebat dan produktif. Daging buah berwarna kuning mentega mengkilap dengan rasa gurih yang pulen. Sangat adaptif dan digemari petani perkebunan nusantara.',
      specs: [
        { label: 'Adaptasi Ketinggian', val: 'Dataran Rendah – Sedang (100 – 800 mdpl)' },
        { label: 'Bobot Buah Rata-rata', val: '600 – 1.000 gram' },
        { label: 'Karakter Berbuah', val: 'Dompolan lebat dan terus menyusul' },
        { label: 'Warna Daging', val: 'Kuning keemasan (mentega tebal)' },
        { label: 'Keunggulan', val: 'Pertumbuhan cepat dan tajuk rimbun' }
      ]
    },
    'wurtz': {
      name: 'Alpukat Wurtz (Little Cado)',
      category: 'Semi-Dwarf & Tabulampot',
      image: 'assets/images/ALPUKAT-WURTZ.webp',
      badge: 'Ideal Tabulampot & Pot',
      desc: 'Satu-satunya varietas alpukat semi-dwarf alami. Tajuknya kompak dan tidak tumbuh liar menjulang tinggi, menjadikannya pilihan nomor satu untuk ditanam dalam pot (tabulampot) di halaman rumah minimalis atau pekarangan sempit perkotaan tanpa mengurangi kenikmatan buahnya.',
      specs: [
        { label: 'Tipe Pertumbuhan', val: 'Semi-Dwarf (kompak & mudah dipangkas)' },
        { label: 'Cocok Ditanam di', val: 'Pot / Drum (Tabulampot) & Pekarangan Terbatas' },
        { label: 'Bobot Buah', val: '350 – 550 gram' },
        { label: 'Tekstur Daging', val: 'Creamy, lembut, gurih' },
        { label: 'Masa Berbuah', val: '2 – 3 tahun' }
      ]
    },
    'cuba': {
      name: 'Alpukat Cuba',
      category: 'Biji Kecil & Daging Super Tebal',
      image: 'assets/images/ALPUKAT-CUBA.webp',
      badge: 'Daging Tebal Biji Mungil',
      desc: 'Varietas dengan rasio daging buah terhadap biji yang sangat tinggi. Kulit buah mulus dengan kilau kehijauan. Dagingnya tebal kekuningan, pulen, dan rasa legit gurih yang tidak mudah bikin enek. Tanaman kokoh dengan vigor pertumbuhan yang sangat memuaskan.',
      specs: [
        { label: 'Karakter Biji', val: 'Relatif kecil dibanding volume buah' },
        { label: 'Bobot Buah', val: '450 – 750 gram' },
        { label: 'Adaptasi', val: 'Dataran rendah hingga menengah' },
        { label: 'Tekstur', val: 'Pulen, halus, kandungan air seimbang' },
        { label: 'Vigor Bibit', val: 'Kuat, okulasi cepat menyatu' }
      ]
    },
    'booth-7': {
      name: 'Alpukat Booth-7',
      category: 'Daya Simpan Panjang & Komersial',
      image: 'assets/images/ALPUKAT-BOOTH-7.webp',
      badge: 'Tahan Pengiriman Jauh',
      desc: 'Alpukat asal Florida yang populer di Asia Tenggara karena tekstur daging padat dan kulit kokoh yang menjadikannya sangat tahan terhadap goncangan pengiriman jarak jauh. Memiliki daging buah kuning cerah beraroma gurih segar.',
      specs: [
        { label: 'Adaptasi Ketinggian', val: 'Dataran Rendah hingga Sedang' },
        { label: 'Bobot Buah', val: '400 – 650 gram' },
        { label: 'Ketahanan Kulit', val: 'Kuat, tidak mudah memar saat distribusi' },
        { label: 'Daya Simpan', val: 'Bisa 10–14 hari setelah petik' },
        { label: 'Komersial', val: 'Sangat disukai pedagang buah antar-pulau' }
      ]
    },
    'buccaner': {
      name: 'Alpukat Buccaner',
      category: 'Vigor Kuat & Rajin Berbuah',
      image: 'assets/images/ALPUKAT-BUCCANER.webp',
      badge: 'Adaptif & Bandel',
      desc: 'Varietas dengan daya adaptasi iklim yang sangat luas dan vigor pohon yang luar biasa kuat. Buah berbobot mantap dengan aroma buah segar dan daging pulen. Menjadi salah satu varietas penyerbuk (pollinator) yang baik di perkebunan alpukat terpadu.',
      specs: [
        { label: 'Daya Tahan Pohon', val: 'Sangat tangguh, tahan perubahan cuaca' },
        { label: 'Bobot Buah', val: '450 – 700 gram' },
        { label: 'Fungsi Khusus', val: 'Penyerbuk silang yang baik untuk varietas lain' },
        { label: 'Daging Buah', val: 'Kuning kehijauan di tepi, pulen legit' },
        { label: 'Perawatan', val: 'Mudah dan tidak rewel' }
      ]
    }
  };

  // DOM Content Loaded Handler
  document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Navbar scroll effect
    const navbar = document.querySelector('.main-navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }

    // 2. Back to top button
    const backToTopBtn = document.getElementById('backToTopBtn') || document.getElementById('btnBackToTop') || document.querySelector('.back-to-top');
    if (backToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      });
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 3. Mobile Navigation Offcanvas Side-Drawer Handler
    const navCollapse = document.querySelector('.navbar-collapse');
    const navToggler = document.querySelector('.navbar-toggler');
    if (navCollapse) {
      // Create or ensure backdrop element exists
      let navBackdrop = document.querySelector('.nav-drawer-backdrop');
      if (!navBackdrop) {
        navBackdrop = document.createElement('div');
        navBackdrop.className = 'nav-drawer-backdrop';
        document.body.appendChild(navBackdrop);
      }

      // Automatically inject Drawer Header with Close Button if not already in markup
      if (!navCollapse.querySelector('.nav-drawer-header')) {
        const brandLogo = document.querySelector('.brand-logo-img')?.getAttribute('src') || 'assets/images/logo.webp';
        const drawerHeader = document.createElement('div');
        drawerHeader.className = 'nav-drawer-header w-100 d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom d-lg-none';
        drawerHeader.style.borderColor = 'rgba(255, 255, 255, 0.12)';
        drawerHeader.innerHTML = `
          <div class="d-flex align-items-center gap-2">
            <img src="${brandLogo}" alt="Logo Astana Avocado" style="width: 34px; height: 34px; object-fit: contain; border-radius: 50%; background: #ffffff; padding: 2px;">
            <div class="d-flex flex-column text-start">
              <span class="text-white fw-bold" style="font-family: var(--font-heading); font-size: 0.95rem; line-height: 1.2;">Astana Avocado</span>
              <span style="font-size: 0.65rem; color: #E5A93C; letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase;">Indonesia</span>
            </div>
          </div>
          <button type="button" class="btn text-white p-1 border-0 shadow-none nav-drawer-close" aria-label="Tutup menu">
            <i class="bi bi-x-lg fs-5"></i>
          </button>
        `;
        navCollapse.prepend(drawerHeader);
      }

      const openDrawer = () => {
        navCollapse.classList.add('show', 'drawer-open');
        navCollapse.classList.remove('collapsing');
        navBackdrop.classList.add('show');
        document.body.classList.add('nav-drawer-open');
        if (navToggler) navToggler.setAttribute('aria-expanded', 'true');
      };

      const closeDrawer = () => {
        navCollapse.classList.remove('show', 'drawer-open', 'collapsing');
        navBackdrop.classList.remove('show');
        document.body.classList.remove('nav-drawer-open');
        if (navToggler) navToggler.setAttribute('aria-expanded', 'false');
      };

      // Fast toggle on hamburger click (instant 0ms trigger instead of waiting for 350ms collapse)
      if (navToggler) {
        navToggler.addEventListener('click', (e) => {
          if (window.innerWidth < 992) {
            e.preventDefault();
            e.stopPropagation();
            if (navCollapse.classList.contains('show') || navCollapse.classList.contains('drawer-open')) {
              closeDrawer();
            } else {
              openDrawer();
            }
          }
        });
      }

      // Close when clicking the backdrop outside drawer
      navBackdrop.addEventListener('click', () => {
        closeDrawer();
      });

      // Close when clicking the 'X' button
      navCollapse.addEventListener('click', (e) => {
        const closeBtn = e.target.closest('.nav-drawer-close');
        if (closeBtn) {
          e.preventDefault();
          closeDrawer();
        }
      });

      // Handle regular nav links click (Tentang Kami, Layanan, Galeri, Blog, etc.)
      const regularNavLinks = navCollapse.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle), .dropdown-item');
      regularNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (window.innerWidth < 992) {
            if (href && href.startsWith('#')) {
              closeDrawer();
            } else {
              closeDrawer();
            }
          }
        });
      });
    }

    // 4. Variety Catalog Filtering
    const filterButtons = document.querySelectorAll('.variety-filter-bar .filter-btn');
    const varietyItems = document.querySelectorAll('.variety-grid-col');

    if (filterButtons.length && varietyItems.length) {
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          filterButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const filterVal = btn.getAttribute('data-filter');

          varietyItems.forEach(item => {
            const categories = item.getAttribute('data-category') || '';
            if (filterVal === 'all' || categories.includes(filterVal)) {
              item.style.display = 'block';
              item.style.animation = 'fadeInUp 0.4s ease forwards';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    }

    // 5. Variety Modal Trigger Handler
    const varietyModalEl = document.getElementById('varietyModal');
    if (varietyModalEl && typeof bootstrap !== 'undefined') {
      const modal = new bootstrap.Modal(varietyModalEl);
      const detailBtns = document.querySelectorAll('.btn-variety-detail');

      detailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const key = btn.getAttribute('data-variety-key');
          const data = VARIETY_DATA[key];
          if (!data) return;

          document.getElementById('modalVarietyTitle').textContent = data.name;
          document.getElementById('modalVarietyBadge').textContent = data.badge;
          document.getElementById('modalVarietyImg').src = data.image;
          document.getElementById('modalVarietyImg').alt = data.name;
          document.getElementById('modalVarietyDesc').textContent = data.desc;

          // Populate specs table
          const specsBody = document.getElementById('modalVarietySpecs');
          if (specsBody) {
            specsBody.innerHTML = '';
            data.specs.forEach(spec => {
              const row = document.createElement('tr');
              row.innerHTML = `<th style="width: 40%; font-size: 0.86rem; color: #315B3A;">${spec.label}</th><td style="font-size: 0.88rem; color: #27312A;">${spec.val}</td>`;
              specsBody.appendChild(row);
            });
          }

          // Update WhatsApp CTA button in Modal
          const modalWaBtn = document.getElementById('modalVarietyWaBtn');
          if (modalWaBtn) {
            const msg = `Halo Astana Avocado, saya ingin bertanya ketersediaan stok & harga bibit alpukat varietas ${data.name}. Mohon informasi detailnya.`;
            modalWaBtn.href = buildWhatsAppUrl(msg);
          }

          modal.show();
        });
      });
    }

    // 6. Gallery Filtering & Lightbox Modal
    const galleryFilterBtns = document.querySelectorAll('.gallery-filter-bar .filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-grid-col');

    if (galleryFilterBtns.length && galleryItems.length) {
      galleryFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          galleryFilterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const category = btn.getAttribute('data-gallery-filter');

          galleryItems.forEach(item => {
            const itemCat = item.getAttribute('data-gallery-cat') || '';
            if (category === 'all' || itemCat.includes(category)) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    }

    // Lightbox modal trigger
    const lightboxModalEl = document.getElementById('galleryLightboxModal');
    if (lightboxModalEl && typeof bootstrap !== 'undefined') {
      const lightboxModal = new bootstrap.Modal(lightboxModalEl);
      const galleryCards = document.querySelectorAll('.gallery-card');

      galleryCards.forEach(card => {
        card.addEventListener('click', () => {
          const imgSrc = card.getAttribute('data-img-src') || card.querySelector('img').src;
          const title = card.getAttribute('data-title') || 'Galeri Astana Avocado';
          const desc = card.getAttribute('data-desc') || 'Dokumentasi bibit dan varietas alpukat asli di kebun Astana Avocado.';

          document.getElementById('lightboxImg').src = imgSrc;
          document.getElementById('lightboxTitle').textContent = title;
          document.getElementById('lightboxDesc').textContent = desc;

          lightboxModal.show();
        });
      });
    }

    // 7. Dynamic WhatsApp Event Tracking Logger (for PRD analytics requirement)
    const waButtons = document.querySelectorAll('a[href*="wa.me"]');
    waButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const eventName = btn.getAttribute('data-wa-event') || 'whatsapp_click_general';
        console.log(`[Astana Avocado Analytics Event]: ${eventName} triggered.`);
        // Ready for Google Analytics / Tag Manager dataLayer.push({ event: eventName })
        if (window.dataLayer) {
          window.dataLayer.push({ event: eventName });
        }
      });
    });

    // 8. Desktop Hover Dropdown Navigation
    const navDropdowns = document.querySelectorAll('.navbar-nav .nav-item.dropdown');
    navDropdowns.forEach(dropdownEl => {
      const toggle = dropdownEl.querySelector('.dropdown-toggle');
      if (toggle && typeof bootstrap !== 'undefined') {
        const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(toggle);

        dropdownEl.addEventListener('mouseenter', () => {
          if (window.innerWidth >= 992) {
            bsDropdown.show();
          }
        });

        dropdownEl.addEventListener('mouseleave', () => {
          if (window.innerWidth >= 992) {
            bsDropdown.hide();
          }
        });

        // Desktop click on dropdown toggle navigates directly to target page
        toggle.addEventListener('click', (e) => {
          if (window.innerWidth >= 992) {
            const targetUrl = toggle.getAttribute('href');
            if (targetUrl && targetUrl !== '#' && !targetUrl.startsWith('javascript:')) {
              window.location.href = targetUrl;
            }
          }
        });
      }
    });

    // 9. Auto-update Current Year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }

    // 10. Article Share: Copy Link Functionality
    const copyShareBtns = document.querySelectorAll('.share-btn-copy');
    copyShareBtns.forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const currentUrl = window.location.href;
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(currentUrl);
          } else {
            const tempInput = document.createElement('input');
            tempInput.value = currentUrl;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
          }

          const originalHTML = btn.innerHTML;
          btn.classList.add('copied');
          btn.innerHTML = '<i class="bi bi-check2"></i> <span class="share-btn-text">Tersalin!</span>';

          setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = originalHTML;
          }, 2200);
        } catch (err) {
          console.error('Gagal menyalin link:', err);
        }
      });
    });

  });

})();
