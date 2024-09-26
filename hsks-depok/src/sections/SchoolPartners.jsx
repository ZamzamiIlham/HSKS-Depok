import { Scrollar } from "../components";
import { Crousal } from "../assets/images"; 

const SchoolPartners = () => {
  return (
    <div className="max-container py-8">
      <Scrollar speed="medium">
        {Crousal.map((logo, index) => (
          <img 
          className="max-h-[30px] sm:max-h-[52px]"
          key={index}
          src={logo}
          alt={`Partner logo ${index}`} 
          />
        ))}
      </Scrollar>
    </div>
  );
};

export default SchoolPartners;
