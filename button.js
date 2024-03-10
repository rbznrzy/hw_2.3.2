class SubmitButton {
  constructor(height, width, type, color) {
    this.props = {
      height: height,
      width: width,
      type: type,
      color: color,
    };
  }
  onClick() {
    console.log(this.props);
  }
}

function testButton() {
  let newButton = new SubmitButton(123, 22, "button", "green");
  newButton.onClick();
  console.log(newButton instanceof SubmitButton);
}

testButton();

