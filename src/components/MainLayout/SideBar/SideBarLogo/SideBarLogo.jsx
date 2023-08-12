import gooseMob1x from '/images/others/mobile/goose1x.png';
import gooseMob2x from '/images/others/mobile/goose2x.png';
import gooseMob3x from '/images/others/mobile/goose3x.png';
import gooseTabl1x from '/images/others/tablet/goose1x.png';
import gooseTabl2x from '/images/others/tablet/goose2x.png';
import gooseTabl3x from '/images/others/tablet/goose3x.png';
import gooseDesk1x from '/images/others/desktop/goose1x.png';
import gooseDesk2x from '/images/others/desktop/goose2x.png';
import gooseDesk3x from '/images/others/desktop/goose3x.png';

export default function SideBarLogo() {
  return (
    <div>
      <img
        srcSet={`${gooseMob1x} 1x,
        ${gooseMob2x} 2x,
        ${gooseMob3x} 3x,
        ${gooseTabl1x} 1x,
        ${gooseTabl2x} 2x,
        ${gooseTabl3x} 3x,
        ${gooseDesk1x} 1x,
        ${gooseDesk2x} 2x,
        ${gooseDesk3x} 3x`}
        src={gooseMob1x}
        alt="SideBarLogo"
        type="image/png"
      />
    </div>
  );
}
