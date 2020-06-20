import React, { useState, useRef, useEffect } from "react";
import useResizeObserver from "use-resize-observer";
import PropTypes from "prop-types";

import ArrowDown from "assets/icons/starship-millenium-arrow.png";
import { Component, Header, Arrow, Wrapper, Container } from "./styles";

const Collapsible = (props) => {
  const { children, content, displayArrow = true, setExpandedCallback } = props;
  const [collapsed, setCollapsed] = useState(true);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const ref = useRef(null);
  const { height } = useResizeObserver({ ref });

  useEffect(() => {
    if (!height) return;
    setWrapperHeight(collapsed ? 0 : height);
  }, [collapsed, height, setWrapperHeight]);

  const handleClick = () => {
    if (setExpandedCallback) {
      setExpandedCallback(collapsed);
    }
    setCollapsed(!collapsed);
  };

  return (
    <Component>
      <Header expanded={!collapsed} onClick={handleClick}>
        {content}
        {displayArrow && (
          <Arrow expanded={!collapsed}>
            <img src={ArrowDown} alt="Collapse" />
          </Arrow>
        )}
      </Header>
      <Wrapper style={{ height: wrapperHeight }}>
        <Container ref={ref}>{children}</Container>
      </Wrapper>
    </Component>
  );
};

Collapsible.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  displayArrow: PropTypes.bool,
};

export default Collapsible;
