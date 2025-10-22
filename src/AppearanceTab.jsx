import { useButtonContext } from './ButtonContext';
import RadioDropdown from "./RadioDropdown";
import StationaryColorPicker from './StationaryColorPicker';
import ColorPicker from './ColorPicker';

function AppearanceTab({}) {

    const btnSizeDropdown = [
      { value: "small", label: "Small" },
      { value: "default", label: "Default" },
      { value: "large", label: "Large" },
    ];
    const btnShapeDropdown = [
      { value: "default", label: "Default" },
      { value: "round", label: "Round" },
      { value: "square", label: "Square" },
    ];
    const btnStyleDropdown = [
      { value: "", label: "Default" },
      { value: "2d", label: "2.5D" },
      { value: "true-flat", label: "Flat 1" },
      { value: "flat", label: "Flat 2" },
      { value: "outline", label: "Outline" },
    ];

    const {
            btnColor,
            btnShape,
            btnSize,
            btnStyle,
            setBtnColor,
            setBtnShape,
            setBtnStyle,
            setBtnSize,
            gradientColorOne, setGradientColorOne,
            gradientColorTwo, setGradientColorTwo,
            applyGradient, setApplyGradient,
            gradientAngle, setGradientAngle,

          } = useButtonContext();

    const h3Stylings = 'block mb-1 pl-1 text-sm font-medium text-gray-700'
    let inputStyles = 'border-gray-300 border-solid border-2 m-2 pl-1';


    return (
    <div className='flex flex-col md:flex-row w-full h-full justify-center items-center pl-2 pr-2 pt-6 mb-4'>
        <div className='flex h-full w-full flex-col justify-center md:justify-start items-center mb-4'>
          <div className='-ml-35 block mb-1 text-sm font-medium text-gray-700'>Button Color</div>
          <StationaryColorPicker color={btnColor} setColor={setBtnColor} />
        </div>

        <div className='flex pl-4 h-full w-full flex-col justify-start items-center gap-4'>
          <RadioDropdown
            label="Button Shape"
            options={btnShapeDropdown}
            value={btnShape}
            onChange={setBtnShape}
          />
          <RadioDropdown
            label="Button Size"
            options={btnSizeDropdown}
            value={btnSize}
            onChange={setBtnSize}
          />
          <RadioDropdown
            label="Button Style"
            options={btnStyleDropdown}
            value={btnStyle}
            onChange={setBtnStyle}
          />

           <div className='flex w-full flex-col justify-start items-start'>
            <div className='flex justify-start items-center mb-2'>
              <input type="checkbox" name="apply-gradient" id="apply-gradient" checked={applyGradient} onChange={() => setApplyGradient(!applyGradient)}/>
              <label className={`${h3Stylings}`} htmlFor="apply-gradient">Apply Gradient</label>
            </div>
                
            <div className="flex gap-2 justify-start items-center w-full">
              <ColorPicker name="gradient-color-1" id="gradient-color-1" color={gradientColorOne} setColor={setGradientColorOne}/>
              <ColorPicker name="gradient-color-2" id="gradient-color-2" color={gradientColorTwo} setColor={setGradientColorTwo}/>
              <div className='flex justify-end items-center w-full'>
                <label className={h3Stylings} htmlFor="gradient-angle">Angle</label>
                <input name="gradient-angle" id="gradient-angle" type="number" className={`${inputStyles} w-16`} onChange={(e) => setGradientAngle(e)}/>
              </div>
      
            </div>
          </div>
        </div>
    </div>
    )
}

export default AppearanceTab