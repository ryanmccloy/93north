import Button from "../reusable/Button";

function NavEnd() {
  return (
    <div className="navbar-end ">
      <Button link={true} href="#contact">
        Contact Us
      </Button>
    </div>
  );
}

export default NavEnd;
