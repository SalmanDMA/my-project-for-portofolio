import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../Global/Layout/Layout';
import PlaneFiguresDetailContent from './PlaneFiguresDetailContent';
import { useEffect } from 'react';
import planeFiguresContentData from '../../../helper/planeFiguresContentData';

const PlaneFiguresDetail = () => {
 const { id } = useParams();
 const selectedItem = planeFiguresContentData.find((item) => item.id === parseInt(id));

 const navigate = useNavigate();

 useEffect(() => {
  if (!selectedItem) {
   navigate('/errorPage');
  }
 }, [selectedItem, navigate]);

 if (!selectedItem) {
  return null;
 }

 return (
  <Layout>
   <div className='container py-5'>
    <PlaneFiguresDetailContent selectedItem={selectedItem} />
   </div>
  </Layout>
 );
};

export default PlaneFiguresDetail;
