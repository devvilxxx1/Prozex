document.addEventListener("DOMContentLoaded", function() {
    // ১. প্রয়োজনীয় CSS সরাসরি ইনজেক্ট করা (যাতে ডিজাইন না ভাঙে)
    const styles = `
    <style>
        :root { --main-blue: #00417b; --neon-cyan: #00e5ff; }
        .header { background: var(--main-blue); color: white; padding: 10px 15px; display: flex; justify-content: space-between; align-items: center; position: fixed; top: 0; width: 100%; z-index: 1000; box-sizing: border-box; box-shadow: 0 2px 5px rgba(0,0,0,0.2); height: 60px; }
        .logo-box { display: flex; align-items: center; text-decoration: none; color: white; }
        .logo-icon { background: white; color: var(--main-blue); font-weight: 900; padding: 5px 8px; border-radius: 5px; margin-right: 8px; font-size: 18px; }
        .logo-text { font-weight: bold; font-size: 16px; letter-spacing: 1px; }
        .menu-icon { font-size: 28px; cursor: pointer; padding-right: 10px; }
        .sidebar { position: fixed; top: 0; right: -280px; width: 260px; height: 100%; background: white; box-shadow: -2px 0 10px rgba(0,0,0,0.2); transition: 0.3s; z-index: 2000; padding-top: 20px; }
        .sidebar a { display: block; padding: 15px 25px; color: #333; text-decoration: none; border-bottom: 1px solid #eee; font-weight: 600; font-size: 15px; }
        .sidebar a:hover { background: #f0f4f7; color: var(--main-blue); }
        .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: none; z-index: 1500; }
        footer { background: #111; color: #888; padding: 25px 15px; text-align: center; font-size: 13px; margin-top: 40px; }
        .f-links a { color: #ccc; text-decoration: none; margin: 0 8px; }
        .f-copy { margin-top: 15px; line-height: 1.5; color: #666; }
    </style>`;

    // ২. হেডার এবং সাইডবার স্ট্রাকচার
    const headerHTML = `
    <div class="header">
        <a href="index.html" class="logo-box">
            <div class="logo-icon"><span>1X</span></div>
            <div class="logo-text">BET OFFICIAL</div>
        </a>
        <div class="menu-icon" onclick="toggleSidebar()">&#9776;</div>
    </div>
    <div class="overlay" id="overlay" onclick="toggleSidebar()"></div>
    <div class="sidebar" id="sidebar">
        <div id="nav-links"></div>
    </div>`;

    // ৩. ফুটার স্ট্রাকচার
    const footerHTML = `
    <footer>
        <div class="f-links">
            <a href="index.html">Home</a> | 
            <a href="terms.html">Terms</a> | 
            <a href="privacy.html">Privacy</a> | 
            <a href="support.html">Support</a>
        </div>
        <div class="f-copy">
            &copy; 2026 1xBet Official Mobile Partner. Licensed under Curacao eGaming.<br>
            Gambling can be addictive. Please play responsibly.
        </div>
    </footer>`;

    // পেজে ইনজেক্ট করা
    document.head.insertAdjacentHTML('beforeend', styles);
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // ৪. সাইডবার মেনু আইটেম (লিঙ্কগুলো ঠিক করা হয়েছে)
    const navItems = [
        { name: "Home", url: "index.html" },
        { name: "App Features", url: "features.html" },
        { name: "Installation Guide", url: "install.html" },
        { name: "Live Sports", url: "live.html" },
        { name: "Customer Support", url: "support.html" }
    ];

    const navDiv = document.getElementById('nav-links');
    navItems.forEach(item => {
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.name;
        navDiv.appendChild(a);
    });
});

// সাইডবার ফাংশন
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const isOpen = sidebar.style.right === '0px';
    sidebar.style.right = isOpen ? '-280px' : '0px';
    overlay.style.display = isOpen ? 'none' : 'block';
}
