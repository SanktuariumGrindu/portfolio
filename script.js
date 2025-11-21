{\rtf1\ansi\ansicpg1250\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww38200\viewh19540\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /* Zmienne i Reset */\
:root \{\
    --primary-color: #0f172a; /* Ciemny granat - zaufanie */\
    --secondary-color: #334155;\
    --accent-color: #f59e0b; /* Pomara\uc0\u324 czowy - akcja/konwersja */\
    --accent-hover: #d97706;\
    --bg-light: #f8fafc;\
    --text-main: #334155;\
    --text-light: #64748b;\
    --white: #ffffff;\
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\
    --radius: 8px;\
    --transition: all 0.3s ease;\
\}\
\
* \{\
    box-sizing: border-box;\
    margin: 0;\
    padding: 0;\
\}\
\
body \{\
    font-family: 'Inter', sans-serif;\
    line-height: 1.6;\
    color: var(--text-main);\
    background-color: var(--white);\
\}\
\
a \{\
    text-decoration: none;\
    color: inherit;\
\}\
\
ul \{\
    list-style: none;\
\}\
\
img \{\
    max-width: 100%;\
    display: block;\
\}\
\
.container \{\
    max-width: 1100px;\
    margin: 0 auto;\
    padding: 0 20px;\
\}\
\
/* Komponenty */\
.btn \{\
    display: inline-block;\
    padding: 12px 24px;\
    border-radius: var(--radius);\
    font-weight: 600;\
    cursor: pointer;\
    transition: var(--transition);\
    text-align: center;\
\}\
\
.btn-primary \{\
    background-color: var(--accent-color);\
    color: var(--white);\
    border: 2px solid var(--accent-color);\
\}\
\
.btn-primary:hover \{\
    background-color: var(--accent-hover);\
    border-color: var(--accent-hover);\
\}\
\
.btn-outline \{\
    background-color: transparent;\
    border: 2px solid var(--primary-color);\
    color: var(--primary-color);\
    margin-left: 10px;\
\}\
\
.btn-outline:hover \{\
    background-color: var(--primary-color);\
    color: var(--white);\
\}\
\
.section \{\
    padding: 80px 0;\
\}\
\
.bg-light \{ background-color: var(--bg-light); \}\
.bg-dark \{ background-color: var(--primary-color); \}\
.text-white \{ color: var(--white); \}\
.text-gray \{ color: #94a3b8; \}\
\
.section-header \{\
    text-align: center;\
    margin-bottom: 50px;\
\}\
\
.section-header h2 \{\
    font-size: 2rem;\
    color: var(--primary-color);\
    margin-bottom: 10px;\
\}\
\
.highlight \{ color: var(--accent-color); \}\
\
/* Nawigacja */\
.navbar \{\
    background-color: var(--white);\
    box-shadow: var(--shadow);\
    position: sticky;\
    top: 0;\
    z-index: 100;\
    padding: 15px 0;\
\}\
\
.nav-container \{\
    display: flex;\
    justify-content: space-between;\
    align-items: center;\
\}\
\
.logo \{\
    font-size: 1.5rem;\
    font-weight: 700;\
    color: var(--primary-color);\
\}\
\
.nav-menu \{\
    display: flex;\
    align-items: center;\
    gap: 25px;\
\}\
\
.nav-link \{\
    color: var(--secondary-color);\
    font-weight: 500;\
\}\
\
.nav-link:hover \{ color: var(--accent-color); \}\
\
.btn-nav \{\
    padding: 8px 16px;\
    background-color: var(--primary-color);\
    color: var(--white);\
    border-radius: var(--radius);\
\}\
\
.hamburger \{\
    display: none;\
    background: none;\
    border: none;\
    cursor: pointer;\
\}\
\
.bar \{\
    display: block;\
    width: 25px;\
    height: 3px;\
    margin: 5px auto;\
    background-color: var(--primary-color);\
    transition: var(--transition);\
\}\
\
/* Hero */\
.hero \{\
    padding: 80px 0;\
    background: linear-gradient(to right, #f8fafc 50%, #ffffff 50%);\
\}\
\
.hero-content \{\
    display: grid;\
    grid-template-columns: 1fr 1fr;\
    gap: 40px;\
    align-items: center;\
\}\
\
.hero-text h1 \{\
    font-size: 2.8rem;\
    line-height: 1.2;\
    margin-bottom: 20px;\
    color: var(--primary-color);\
\}\
\
.hero-subtitle \{\
    font-size: 1.1rem;\
    color: var(--text-light);\
    margin-bottom: 30px;\
\}\
\
.hero-image img \{\
    border-radius: var(--radius);\
    box-shadow: var(--shadow);\
\}\
\
/* O Mnie & Dla Kogo */\
.about-content \{\
    display: grid;\
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\
    gap: 30px;\
\}\
\
.about-card, .card \{\
    background: var(--white);\
    padding: 30px;\
    border-radius: var(--radius);\
    box-shadow: var(--shadow);\
    transition: var(--transition);\
    text-align: center;\
\}\
\
.card:hover \{ transform: translateY(-5px); \}\
\
.icon-large \{\
    font-size: 3rem;\
    color: var(--accent-color);\
    margin-bottom: 20px;\
\}\
\
.icon-circle \{\
    width: 60px;\
    height: 60px;\
    background-color: #eff6ff;\
    color: var(--primary-color);\
    border-radius: 50%;\
    display: flex;\
    align-items: center;\
    justify-content: center;\
    font-size: 1.5rem;\
    margin: 0 auto 20px;\
\}\
\
.grid-3 \{\
    display: grid;\
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\
    gap: 30px;\
\}\
\
/* Us\uc0\u322 ugi */\
.services-list \{\
    display: grid;\
    gap: 20px;\
\}\
\
.service-item \{\
    display: flex;\
    align-items: flex-start;\
    gap: 20px;\
    background: var(--white);\
    padding: 20px;\
    border-radius: var(--radius);\
    border: 1px solid #e2e8f0;\
\}\
\
.service-icon \{\
    color: var(--accent-color);\
    font-size: 1.5rem;\
    margin-top: 5px;\
\}\
\
.info-box \{\
    background-color: #e0f2fe;\
    color: #0369a1;\
    padding: 15px;\
    border-radius: var(--radius);\
    display: flex;\
    align-items: center;\
    gap: 10px;\
    justify-content: center;\
\}\
\
/* Portfolio */\
.project-card \{\
    background: var(--white);\
    border-radius: var(--radius);\
    overflow: hidden;\
    box-shadow: var(--shadow);\
    margin-bottom: 40px;\
    display: grid;\
    grid-template-columns: 1.5fr 1fr;\
\}\
\
.project-image \{\
    position: relative;\
    background-color: #f1f5f9;\
    display: flex;\
    align-items: center;\
    justify-content: center;\
    overflow: hidden;\
\}\
\
.project-image img \{\
    width: 100%;\
    height: 100%;\
    object-fit: cover;\
\}\
\
.project-tags \{\
    position: absolute;\
    top: 15px;\
    left: 15px;\
    display: flex;\
    gap: 10px;\
\}\
\
.tag \{\
    padding: 4px 10px;\
    border-radius: 20px;\
    font-size: 0.8rem;\
    font-weight: 600;\
    color: var(--white);\
\}\
\
.tag-ecommerce \{ background-color: #10b981; \}\
.tag-smallbiz \{ background-color: #3b82f6; \}\
.tag-auto \{ background-color: #8b5cf6; \}\
.tag-freelance \{ background-color: #f59e0b; \}\
\
.project-info \{\
    padding: 30px;\
\}\
\
.project-info h3 \{ margin-bottom: 15px; color: var(--primary-color); \}\
.project-problem, .project-solution \{ margin-bottom: 15px; font-size: 0.95rem; \}\
\
.portfolio-grid \{\
    display: grid;\
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\
    gap: 30px;\
\}\
\
.project-mini-card \{\
    background: var(--white);\
    border-radius: var(--radius);\
    box-shadow: var(--shadow);\
    overflow: hidden;\
\}\
\
.mini-img \{\
    height: 200px;\
    background-color: #f1f5f9;\
\}\
.mini-img img \{ width: 100%; height: 100%; object-fit: cover; \}\
\
.mini-content \{ padding: 20px; \}\
.mini-content h4 \{ margin: 10px 0; color: var(--primary-color); \}\
.result \{ margin-top: 10px; color: var(--accent-color); font-weight: 600; font-size: 0.9rem; \}\
\
/* Proces */\
.process-steps \{\
    display: grid;\
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\
    gap: 30px;\
    text-align: center;\
\}\
\
.step-number \{\
    width: 50px;\
    height: 50px;\
    background-color: var(--accent-color);\
    color: var(--white);\
    font-size: 1.5rem;\
    font-weight: 700;\
    border-radius: 50%;\
    display: flex;\
    align-items: center;\
    justify-content: center;\
    margin: 0 auto 20px;\
\}\
\
/* Kontakt */\
.contact-container \{\
    display: grid;\
    grid-template-columns: 1fr 1fr;\
    gap: 50px;\
\}\
\
.contact-benefits li \{\
    margin-bottom: 15px;\
    display: flex;\
    align-items: center;\
    gap: 10px;\
    font-weight: 500;\
\}\
\
.contact-benefits i \{ color: var(--accent-color); \}\
\
.contact-form \{\
    background: var(--white);\
    padding: 30px;\
    border-radius: var(--radius);\
    box-shadow: var(--shadow);\
    border: 1px solid #e2e8f0;\
\}\
\
.form-group \{ margin-bottom: 20px; \}\
.form-group label \{ display: block; margin-bottom: 8px; font-weight: 500; \}\
.form-group input, .form-group select, .form-group textarea \{\
    width: 100%;\
    padding: 10px;\
    border: 1px solid #cbd5e1;\
    border-radius: var(--radius);\
    font-family: inherit;\
\}\
\
.full-width \{ width: 100%; \}\
\
footer \{\
    background-color: #0f172a;\
    color: #94a3b8;\
    padding: 30px 0;\
    text-align: center;\
    border-top: 1px solid #1e293b;\
\}\
\
/* Responsive Design */\
@media (max-width: 768px) \{\
    .hamburger \{ display: block; \}\
    \
    .nav-menu \{\
        position: fixed;\
        left: -100%;\
        top: 70px;\
        flex-direction: column;\
        background-color: var(--white);\
        width: 100%;\
        text-align: center;\
        transition: 0.3s;\
        box-shadow: 0 10px 10px rgba(0,0,0,0.1);\
        padding: 20px 0;\
    \}\
\
    .nav-menu.active \{ left: 0; \}\
    .nav-menu li \{ margin: 15px 0; \}\
    \
    .hero-content, .project-card, .contact-container \{\
        grid-template-columns: 1fr;\
    \}\
    \
    .hero \{ \
        background: var(--bg-light); \
        padding: 40px 0;\
    \}\
    \
    .hero-image \{ margin-top: 30px; \}\
    .hero-text h1 \{ font-size: 2rem; \}\
    \
    .btn-outline \{ margin: 10px 0 0 0; display: inline-block; \}\
\}}