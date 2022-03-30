function nav() {
  return `
  <div class="nav" id="nav-top">
  <!-- . -->
  <div id="nav-top-left">
    <a href="./index.html"
      ><video src="./videos/crome-logo-vid.mp4" autoplay loop></video
    ></a>
    <!-- . -->
    <div class="dropdown">
      <img src="./images/menu-bars-2.png" alt="" srcset="" />
      <button class="dropbtn">Menu</button>
      <div class="dropdown-content">
        <h3>Shop by Category</h3>
        <a href="">Televisions & Accessories</a>
        <a href="#">Home Appliances</a>
        <a href="#">Phone and Wearables</a>
      </div>
    </div>
  </div>
  <!-- . -->
  <div id="nav-top-center">
    <input
      type="text"
      id="nav-top-search"
      placeholder="What are you looking for ?"
    />
    <div id="nav-search-icon"><i class="fas fa-search"></i></div>
  </div>
  <!-- . -->
  <div id="nav-top-right">
    <div id="nav-location">
      <img
        src="./images/outline_location_on_white_24dp.png"
        alt="location"
      />
      <span>Mumbai,400049</span>
    </div>
    <!-- . -->
    <div id="nav-login">
      <a href=""
        ><img src="./images/outline_person_white_24dp.png" alt="profile"
      /></a>
    </div>
    <!-- . -->
    <div id="nav-cart">
      <a href="">
        <img src="./images/outline_shopping_cart_white_24dp.png" />
      </a>
    </div>
  </div>
  <!-- . -->
</div>

<div id="nav-bottom">
  <div
    class="carousel"
    data-flickity='{ "wrapAround": true,"imagesLoaded":true }'
  >
    <div class="carousel-cell">
      <a href="">
        <img
          class="w3-image"
          src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891062/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Mobile_Phones_adlg8p.svg/mxw_64,f_auto"
        />
        <p>Mobiles</p>
      </a>
    </div>

    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img
          class="w3-image"
          src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891064/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Televisions_ikvrve.svg/mxw_64,f_auto"
        />
        <p>Televisions</p>
      </a>
    </div>

    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img class="w3-image" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891062/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Laptops_cd8zmr.svg/mxw_64,f_auto" />
        <p>Laptops</p>
      </a>
    </div>

    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img
          class="w3-image"
          src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891060/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Audio_dpxz8t.svg/mxw_64,f_auto"
        />
        <p>Audio</p>
      </a>
    </div>
    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img
          class="w3-image"
          src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891060/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Air_Conditioners_ove6gw.svg/mxw_64,f_auto"
        />
        <p>Air Conditioners</p>
      </a>
    </div>
    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img
          class="w3-image"
          src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891062/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Refrigerator_tbh6zb.svg/mxw_64,f_auto"
        />
        <p>Refrigerators</p>
      </a>
    </div>
    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img class="w3-image" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891065/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Washing_Machine_zrwd8d.svg/mxw_64,f_auto" />
        <p>Washing Machines</p>
      </a>
    </div>
    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img
          class="w3-image"
          src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891060/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Category_Icons_Black_Theme_Copy_3_gpkdvg.svg/mxw_64,f_auto"
        />
        <p>Kitchen Appliances</p>
      </a>
    </div>
    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img class="w3-image" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891062/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Grooming_tuasmh.svg/mxw_64,f_auto" />
        <p>Grooming</p>
      </a>
    </div>
    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img class="w3-image" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891063/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Tablet_r0yxrc.svg/mxw_64,f_auto" />
        <p>Tablets</p>
      </a>
    </div>
    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img
          class="w3-image"
          src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891064/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Wearables_asksa8.svg/mxw_64,f_auto"
        />
        <p>Wearables</p>
      </a>
    </div>
    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img class="w3-image" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891060/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Cameras_e6dimt.svg/mxw_64,f_auto" />
        <p>Cameras</p>
      </a>
    </div>
    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img
          class="w3-image"
          src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891060/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Accessories_rj7eoq.svg/mxw_64,f_auto"
        />
        <p>Accessories</p>
      </a>
    </div>
    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img class="w3-image" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891062/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Gaming_Console_nh64os.svg/mxw_64,f_auto" />
        <p>Gaming</p>
      </a>
    </div>
    <!-- . -->
    <div class="carousel-cell">
      <a href="">
        <img
          class="w3-image"
          src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637891060/Croma%20Assets/CMS/Category%20icon/Category%20Icons/Consumables_cy6rgt.svg/mxw_64,f_auto"
        />
        <p>Consumables</p>
      </a>
    </div>
  </div>
</div>
</div>
  `;
}

export default nav;
