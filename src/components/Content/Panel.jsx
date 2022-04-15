import { useEffect } from "react";
import { Container, Flex } from "../../assets/style/style";

const Panel = () => {
  useEffect(() => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }, []);

  return (
    <Container>
      <Flex flexCol alignCenter justifyCenter className="gap-10">
        <Flex flexCol alignCenter justifyCenter>
          <button class="collapsible">Open Section 3</button>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Panel;
