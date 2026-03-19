document.addEventListener("DOMContentLoaded", function() {
    // ১. হেডার এবং সাইডবার তৈরি
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

    // ২. ফুটার তৈরি
    const footerHTML = `
    <footer>
        <div class="f-links">
            <a href="terms.html">Terms</a> | 
            <a href="privacy.html">Privacy</a> | 
            <a href="support.html">App Support</a>
        </div>
        <div class="f-copy">
            &copy; 2026 1xBet Official Mobile Partner. Licensed under Curacao eGaming.<br>
            Gambling can be addictive. Please play responsibly.
        </div>
    </footer>`;

    // পেজের শুরুতে হেডার এবং শেষে ফুটার ইনজেক্ট করা
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // ৩. সাইডবার মেনু আইটেম লোড করা
    const navItems = [
        { name: "Home", url: "index.html" },
        { name: "App Features", url: "features.html" },
        { name: "Installation Guide", url: "install.html" },
        { name: "Live Sports", url: "live.html" }
    ];

    const navDiv = document.getElementById('nav-links');
    navItems.forEach(item => {
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.name;
        navDiv.appendChild(a);
    });
});

// সাইডবার ওপেন/ক্লোজ ফাংশন
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const isOpen = sidebar.style.right === '0px';
    sidebar.style.right = isOpen ? '-280px' : '0px';
    overlay.style.display = isOpen ? 'none' : 'block';
}
