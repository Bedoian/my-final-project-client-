import Cover from "../Shared/Cover";
import img from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import TabCard from "../../Components/TabCard/TabCard";

const Order = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const [tabIndex, setTabIndex] = useState();
    return (
        <div>
            <Cover img={img} title={'OUR SHOP'}></Cover>

            <div className="container mx-auto my-8">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    {/* Tab Navigation */}
                    <TabList className="flex justify-center space-x-8 border-b-2">
                        <Tab className={`px-4 py-2 cursor-pointer ${tabIndex === 0 ? 'text-yellow-500 border-b-4 border-yellow-500' : ''} hover:text-yellow-500`}>
                            SALAD
                        </Tab>
                        <Tab className={`px-4 py-2 cursor-pointer ${tabIndex === 1 ? 'text-yellow-500 border-0 border-b-4 border-yellow-500' : 'text-gray-500 hover:text-yellow-500'}`}>
                            PIZZA
                        </Tab>
                        <Tab className={`px-4 py-2 cursor-pointer ${tabIndex === 2 ? 'text-yellow-500 border-b-4 border-yellow-500' : 'text-gray-500 hover:text-yellow-500'}`}>
                            SOUP
                        </Tab>
                        <Tab className={`px-4 py-2 cursor-pointer ${tabIndex === 3 ? 'text-yellow-500 border-b-4 border-yellow-500' : 'text-gray-500 hover:text-yellow-500'}`}>
                            DESSERTS
                        </Tab>
                    </TabList>

                    {/* Salad Tab Content */}
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
                        <TabCard items={dessert}></TabCard>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;
