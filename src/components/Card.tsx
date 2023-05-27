interface CardProps {
  title: string;
  title_color: string;
  sub_titile?: {
    title_left?: string;
    title_right?: string;
    title_left_color?: string;
    title_right_color?: string;
    title_left_size?: string;
    title_right_size?: string;
  };
  description: string;
  description_color: string;
  description_size: string;
  hasBtn: boolean;
  btn_color?: string;
  btn_title?: string;
  bg_color: string;
  rounded_left?: boolean;
  rounded_right?: boolean;
  rounded_top?: boolean;
  rounded_bottom?: boolean;
  inTheMiddle?: boolean;
  inThebottom?: boolean,
  inThetop?: boolean,
}

const Card: React.FC<CardProps> = ({
  title,
  title_color,
  sub_titile,
  description,
  description_color,
  hasBtn,
  btn_color,
  btn_title,
  bg_color,
  rounded_left,
  rounded_right,
  rounded_top,
  rounded_bottom,
  description_size,
  inTheMiddle,
  inThebottom,
  inThetop,
}) => {
  return (
    <div
      className={`
        ${(rounded_left && rounded_bottom) ? 'sm:rounded-bl-xl' : 'sm:rounded-bl-none'}
        ${(rounded_left && rounded_top) ? 'sm:rounded-tl-xl' : ''}
        ${(rounded_right && rounded_bottom) ? 'sm:rounded-br-xl' : ''}
        ${(rounded_right && rounded_top) ? 'sm:rounded-tr-xl' : ''}
        ${inTheMiddle ? 'rounded-none' : ''}
        ${inThebottom ? 'rounded-b-xl' : ''}
        ${inThetop ? 'rounded-t-xl' : ''}
        bg-${bg_color}
        p-8
        space-y-4
        sm:h-full
        h-fit
        w-full
      `}>
      <h1
        className={`
          text-${title_color}
          font-bold
          text-lg
        `}>
        {title}
      </h1>
      <h2 className={`
        ${sub_titile ? 'visible' : 'hidden'}
        space-x-3
        flex 
        flex-row 
        items-center
      `}>
        <span className={`
            font-bold
            text-${sub_titile?.title_left_size}
            text-${sub_titile?.title_left_color}
          `}>
          {sub_titile?.title_left}
        </span>
        {' '}
        <span
          className={`
            text-${sub_titile?.title_right_size}
            text-${sub_titile?.title_right_color}
          `}>
          {sub_titile?.title_right}
        </span>
      </h2>
      <p
        className={`
          text-${description_size}
          text-${description_color}
        `}>
        {description}
      </p>
      <button
        className={`
          ${hasBtn ? 'visible' : 'hidden'}
          ${hasBtn ? `bg-${btn_color}` : ''}
          text-white
          w-full
          py-3
          rounded-lg
          shadow-xl
          font-bold
        `}>
        {btn_title}
      </button>
      <div
        className="
          hidden 
          bg-white
          bg-Cyan-dark
          bg-Cyan 
          bg-Bright-Yellow 
          bg-Grayish-Blue 
          text-Grayish-Blue 
          text-Cyan
          text-Light-Gray
          text-3xl
        "/>
    </div>
  )
}

export default Card;