type Props = {
    title: string;
    color: string;
    onClick: () => void;
};

const Button = ({ title, color, onClick }: Props) => {

    return (

         <button className={`${color} text-white py-2 px-4 rounded-md`}
                 onClick={onClick}>
             {title}
         </button>
    )
}
export default Button;