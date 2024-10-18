import { useState } from 'react';
import img from '../../assets/shop/banner2.jpg';
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import TabCard from "../../Components/TabCard/TabCard";
import { useParams } from 'react-router';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div className=''>
            <Cover img={img} title={'OUR FOOD'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={'mx-10 border-b-[1px] border-b-gray-400 mt-6'}>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <TabCard items={salad}></TabCard>
                </TabPanel>
                <TabPanel>
                    <TabCard items={pizza}></TabCard>
                </TabPanel>
                <TabPanel>
                    <TabCard items={soup}></TabCard>
                </TabPanel>
                <TabPanel>
                    <TabCard items={desserts}></TabCard>
                </TabPanel>
                <TabPanel>
                    <TabCard items={drinks}></TabCard>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
