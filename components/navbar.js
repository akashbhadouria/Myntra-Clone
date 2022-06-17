function navbar() {
  return `<nav>
        <div id="logo" href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png" alt="">
            </div>

            <div id="options">
            <ul>
                <li id="men"><a href="./MEN.html">MEN</a></li>
                <li id="women"><a href="./WOMEN.html">WOMEN</a></li>
                <li id="kids"><a href="#">KIDS</a></li>
                <li id="home"><a href="#">HOME & LIVING</a></li>
                <li id="beauty"><a href="#">BEAUTY</a></li>
                <li id="studio"><a href="#">STUDIO</a></li>
            </ul>
            </div>
            <img id="search" src="https://img.icons8.com/ios-filled/50/undefined/search--v1.png"/>
            <input type="text" placeholder="Search for Products, Brands & More">
        </nav>`;
}

export { navbar };
