import styled from "styled-components";

export default function DesignSystem() {
  const ColorSwatch = styled.div`
    display:inline-block;
    margin: 10px;
    position: relative;
    width: 200px;
    height: 100px;
    border: 1px solid #fff;

    background-color: ${(props) => props.color};
    
    &::after {
      content: '${(props) => props.color}';
      position: absolute;
      color: #fff;
      font-family: 'Spartan';
      text-transform:uppercase;
      left: 10px;
      bottom: 10px;
      z-index: 10;
    }
  `;

  return (
    <div className="DesignSystem">
      <h1>
        <span>01</span> COLORS
      </h1>
      <ColorSwatch color="#fff" />
      <ColorSwatch color="#070724" />
      <ColorSwatch color="#38384f" />
      <ColorSwatch color="#838391" />
      <ColorSwatch color="#419ebb" />
      <ColorSwatch color="#eba249" />
      <ColorSwatch color="#6f2ed6" />
      <ColorSwatch color="#d14c32" />
      <ColorSwatch color="#cd5120" />
      <ColorSwatch color="#1ec2a4" />
      <ColorSwatch color="#2d68f0" />

      <h1>
        <span>02</span> TYPOGRAPHY
      </h1>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        deleniti veniam! Cupiditate, nisi dolore provident dolor voluptate fugit
        tenetur qui in quasi? Beatae, consequatur qui, dignissimos veritatis
        quo, voluptatem assumenda rem ipsa accusamus quae ipsum laboriosam
        commodi sequi doloremque provident nam dolorem. Alias velit quis, quo
        est aliquam maiores ratione cum, nisi asperiores fugiat illum sit ab,
        aperiam hic nihil porro enim dignissimos quia perferendis. Perspiciatis
        officiis asperiores accusamus maxime. Temporibus aspernatur dolores
        minus reprehenderit, placeat sed expedita earum aperiam nobis provident
        adipisci ad, sapiente fugit odit voluptate. Ut velit quo modi soluta
        explicabo sequi eligendi ducimus assumenda illo mollitia!
      </p>

      <h1>
        <span>03</span> BUTTONS
      </h1>
      <button>Continue</button>
    </div>
  );
}
