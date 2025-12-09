import { OrderProvider } from '@/context/OrderContext';
import { JerseyCustomizer } from '@/components/JerseyCustomizer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jersey Lab - Custom Football Jersey Designer</title>
        <meta name="description" content="Design your perfect football jersey with custom name and number. Choose from top leagues and clubs worldwide." />
      </Helmet>
      <OrderProvider>
        <JerseyCustomizer />
      </OrderProvider>
    </>
  );
};

export default Index;
