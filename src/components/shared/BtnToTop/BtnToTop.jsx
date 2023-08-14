import { useState, useEffect } from 'react';

import { TopButton, ToTopBtn } from './BtnToTop.styled';

export default function BtnToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      UpdateDashOffSet();
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  function UpdateDashOffSet() {
    const scrollUpSvgPath = document.getElementById('iconPath');
    if (scrollUpSvgPath) {
      const pageLength = scrollUpSvgPath.getTotalLength();

      scrollUpSvgPath.style.strokeDasharray = `${pageLength} ${pageLength}`;
      scrollUpSvgPath.style.transition = 'stroke-dashoffset 25ms';

      const currentHeight = document.documentElement.scrollHeight - window.innerHeight;

      const dashOffSet = pageLength - (window.scrollY * pageLength) / currentHeight;

      scrollUpSvgPath.style.strokeDashoffset = dashOffSet;
    }
  }

  return (
    <TopButton hidden={!showTopBtn} id="topButton" onClick={goToTop}>
      {
        <ToTopBtn/>
      }
    </TopButton>
  );
}
