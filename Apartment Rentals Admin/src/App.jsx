import logo from "./assets/main-logo.png";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <div className="main-div">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum
          turpis in eleifend maximus. Integer vehicula lectus sed lectus
          bibendum convallis. Ut tempus est at tempor posuere. Donec lacus enim,
          varius at augue vitae, tempor molestie arcu. Vivamus vestibulum arcu
          id ornare consectetur. Donec ut mi eget est dictum convallis.
          Vestibulum tincidunt augue arcu, at malesuada nibh pretium non.
          Vivamus quis sem nec mauris congue luctus at id lorem. Nam vel nisi a
          eros convallis pretium. Maecenas tincidunt condimentum ante. Donec
          varius velit vel ex pretium ornare. Nulla et mattis erat, sit amet
          facilisis nulla. Pellentesque pulvinar felis eget mollis interdum. Sed
          sed purus mi. Duis laoreet pulvinar urna mattis finibus. Aliquam
          bibendum libero quis eros rutrum posuere. Maecenas tincidunt purus
          suscipit, pellentesque purus sit amet, placerat orci. Donec ut turpis
          aliquam, blandit tellus sit amet, volutpat ligula. Nam et condimentum
          nunc. Nunc aliquet massa diam, at lacinia ante vehicula ut. Cras vitae
          libero metus. Cras porta nunc nec mauris imperdiet, in venenatis dolor
          accumsan. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nam diam lacus, ullamcorper vitae faucibus in, venenatis a
          nisi. Nam et tortor libero. Aliquam pulvinar porta sapien eu lobortis.
          Cras a dolor dapibus, finibus odio non, auctor erat. Donec hendrerit
          dignissim odio. Vivamus eleifend erat non lacus sagittis tristique.
          Nulla eu nunc lacinia, malesuada augue non, luctus erat. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Ut at sollicitudin enim.
          Etiam finibus viverra cursus. Nullam urna tortor, placerat non
          tincidunt eget, elementum ac ex. Cras accumsan tortor a tincidunt
          porta. Mauris molestie, elit vitae posuere lacinia, magna odio rhoncus
          ipsum, eget fringilla erat massa at neque. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis elementum tortor nec ligula aliquam,
          vitae elementum libero ornare. Nulla vel euismod ante, non condimentum
          nunc. In nibh ipsum, tincidunt in justo quis, pellentesque posuere
          velit. Vestibulum cursus, magna vitae rutrum tempor, tortor ex
          fermentum tellus, a rutrum erat felis eget est. In fringilla sapien
          nunc, sit amet placerat quam interdum eu. In hac habitasse platea
          dictumst. Sed aliquam ex quis nisl imperdiet commodo. Phasellus
          molestie tincidunt neque, eu dapibus libero tristique ac. Duis
          venenatis dignissim convallis. Donec sagittis ullamcorper ex a
          maximus. In hac habitasse platea dictumst. Ut vel efficitur ante.
          Nulla vitae justo risus. Fusce in elementum sem, vitae congue orci.
          Morbi ac porta lectus. Phasellus semper lobortis ligula ac ornare.
          Donec eget bibendum purus, ac aliquam nunc. Cras quis malesuada risus,
          et vehicula arcu. Suspendisse ultricies, quam nec condimentum
          vulputate, arcu elit sodales purus, et consectetur libero sapien ut
          erat.
        </div>
      </main>
      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <nav className="nav-bar">
      <img src={logo}></img>
      <h1>Ici ça loue!</h1>
    </nav>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/Skarginson/mini-project-react---Apartment-Rentals-Admin-"
        target="_blank"
      >
        Lien vers Github
      </a>
    </footer>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          {" "}
          <a href="Homepage">Homepage</a>
        </li>
        <li>
          <a href="About"></a>About
        </li>
      </ul>
    </div>
  );
}
export default App;
