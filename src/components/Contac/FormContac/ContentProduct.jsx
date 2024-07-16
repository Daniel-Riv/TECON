import { CardProduct } from './CardProduct';
import { FormContact } from './FormContact';
import './formContac.css';

export const ContentProduct = () => {
  return (
    <div className="contactus p-5">
      <div className="flex flex-col items-center">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            
           {/*  <CardProduct /> */}
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  );
};
