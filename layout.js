document.addEventListener("DOMContentLoaded", function() {
    // ১. চেক করা হচ্ছে এটা index.html বা install.html কি না। 
    // যদি এই দুটি ফাইল হয়, তবে এই স্ক্রিপ্ট কিছুই করবে না।
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'index.html' || currentPage === 'install.html' || currentPage === '' || currentPage === '/') {
        return; 
    }

    // ২. অন্য সব পেজের জন্য ডিজাইন (CSS)
    const styles = `<style>
        :root { --main-blue: #00417b; --neon-cyan: #00e5ff; }
        .header { background: var(--main-blue); color: white; padding: 10px 15px; display: flex; justify-content: space-between; align-items: center; position: fixed; top: 0; width: 100%; z-index: 1000; box-sizing: border-box; box-shadow: 0 2px 5px rgba(0,0,0,0.2); height: 60px; }
        .logo-box { display: flex; align-items: center; text-decoration: none; color: white; }
        .logo-icon { width: 30px; height: 30px; background: white; border-radius: 6px; display: flex; align-items: center; justify-content: center; transform: skewX(-10deg); border: 1px solid #fff; margin-right: 8px; }
        .logo-icon span { color: var(--main-blue); font-weight: 900; font-size: 16px; transform: skewX(10deg); }
        .logo-text { font-weight: bold; font-size: 16px; letter-spacing: 1px; }
        .menu-icon { font-size: 28px; cursor: pointer; padding-right: 10px; }
        .sidebar { position: fixed; top: 0; right: -280px; width: 260px; height: 100%; background: #002d55; transition: 0.3s; z-index: 2000; padding-top: 50px; }
        .sidebar a { display: block; padding: 15px 25px; color: white; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.1); font-weight: 600; font-size: 15px; text-transform: capitalize; }
        .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: none; z-index: 1500; }
        footer { background: #001a33; color: #777; padding: 25px 15px; text-align: center; margin-top: 30px; border-top: 1px solid #002d55; font-size: 13px; }
        .f-links a { color: #ccc; text-decoration: none; margin: 0 8px; }
    </style>`;

    // ৩. হেডার, ফুটার এবং সাইডবার ইনজেক্ট করা (শুধু index এবং install ছাড়া অন্য পেজে)
    const headerHTML = `
    <div class="header">
        <a href="index.html" class="logo-box"><div class="logo-icon"><span>1X</span></div><div class="logo-text">BET OFFICIAL</div></a>
        <div class="menu-icon" onclick="toggleSidebar()">&#9776;</div>
    </div>
    <div class="overlay" id="overlay" onclick="toggleSidebar()"></div>
    <div class="sidebar" id="sidebar"><div id="nav-links"></div></div>`;

    const footerHTML = `<footer><div class="f-links"><a href="index.html">Home</a> | <a href="terms.html">Terms</a> | <a href="privacy.html">Privacy</a> | <a href="support.html">Support</a></div><div class="f-copy">&copy; 2026 1xBet Official Mobile Partner.</div></footer>`;

    document.head.insertAdjacentHTML('beforeend', styles);
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // ৪. স্মার্ট মেনু ফিল্টার (গুগল ফাইল এবং সংখ্যা বাদ)
    loadMenu();
});

async function loadMenu() {
    const navDiv = document.getElementById('nav-links');
    if(!navDiv) return;
    navDiv.innerHTML = '<a href="index.html">Home</a>';

    try {
        const response = await fetch('https://api.github.com/repos/devvilxxx1/Prozex/contents/');
        const files = await response.json();
        const exclude = ['index.html', 'terms.html', 'privacy.html', 'support.html', 'install.html'];

        files.forEach(file => {
            // ফিল্টার: শুধু HTML, গুগল ফাইল বাদ এবং সংখ্যাওয়ালা ফাইল বাদ
            if (file.name.endsWith('.html') && !exclude.includes(file.name) && !file.name.startsWith('google') && !/\d/.test(file.name.replace('.html', ''))) {
                const a = document.createElement('a');
                a.href = file.name;
                // নাম সুন্দর করা: live.html -> Live
                a.textContent = file.name.replace('.html', '').replace(/[-_]/g, ' ');
                navDiv.appendChild(a);
            }
        });
    } catch (e) { console.error("Menu error"); }
}

// সাইডবার ফাংশন
window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (!sidebar) return;
    const isOpen = sidebar.style.right === '0px';
    sidebar.style.right = isOpen ? '-280px' : '0px';
    overlay.style.display = isOpen ? 'none' : 'block';
};
