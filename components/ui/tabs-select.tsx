// import React, { useState, createContext, useContext, ReactNode } from 'react';

// // Context types and props
// type TabsContextType = {
//     activeTab: ReactNode;
//     setActiveTab: (param: ReactNode) => void;
// };

// type TabsProps = {
//     children: ReactNode;
//     defaultActiveTab: ReactNode;
// };

// type TabListProps = {
//     children: ReactNode;
// };

// type TabProps = {
//     children: ReactNode;
//     name: ReactNode;
// };

// type TabPanelProps = {
//     children: ReactNode;
//     name: ReactNode;
// };

// type TabDropdownProps = {
//     name: ReactNode;
//     items?: Array<{ label: string; value?: ReactNode }>;
// };

// const TabsContext = createContext<TabsContextType | undefined>(undefined);

// function Tabs({ children, defaultActiveTab }: TabsProps) {
//     const [activeTab, setActiveTab] = useState(defaultActiveTab);

//     return (
//         <TabsContext.Provider value={{ activeTab, setActiveTab }}>
//             <div className="tabs">{children}</div>
//         </TabsContext.Provider>
//     );
// }

// function TabList({ children }: TabListProps) {
//     return <div className="tab-list">{children}</div>;
// }

// function Tab({ children, name }: TabProps) {
//     const context = useContext(TabsContext);
//     if (!context) {
//         throw new Error('Tab must be used within a Tabs provider');
//     }

//     const { activeTab, setActiveTab } = context;
//     const isActive = activeTab === name;

//     return (
//         <button
//             className={`tab ${isActive ? 'active' : ''}`}
//             onClick={() => setActiveTab(name)}
//         >
//             {children}
//         </button>
//     );
// }

// function TabPanel({ children, name }: TabPanelProps) {
//     const context = useContext(TabsContext);
//     if (!context) {
//         throw new Error('TabPanel must be used within a Tabs provider');
//     }

//     const { activeTab } = context;
//     return activeTab === name ? <div className="tab-panel">{children}</div> : null;
// }

// function TabDropdown({ name, items }: TabDropdownProps) {
//     const context = useContext(TabsContext);
//     if (!context) {
//         throw new Error('TabDropdown must be used within a Tabs provider');
//     }

//     const { activeTab, setActiveTab } = context;
//     const isActive = activeTab === name;

//     return (
//         <div className={`tab-dropdown ${isActive ? 'active' : ''}`}>
//             <button onClick={() => setActiveTab(name)}>{name}</button>
//             {isActive && (
//                 <ul className="dropdown-menu">
//                     {items?.map((item, index) => (
//                         <li
//                             key={`${index}-tab`}
//                             onClick={() => setActiveTab(item.value)}
//                         >
//                             {item.label}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// export { Tabs, TabList, Tab, TabPanel, TabDropdown };


// // usage

// <Tabs defaultActiveTab="tab1">
//     <TabList>
//         <Tab name="tab1">Tab 1</Tab>
//         <TabDropdown
//             name="tab2"
//             items={[
//                 { label: 'Item 1', value: 'item1' },
//                 { label: 'Item 2', value: 'item2' },
//             ]}
//         />
//     </TabList>
//     <TabPanel name="tab1">
//         <p>Content for Tab 1</p>
//     </TabPanel>
//     <TabPanel name="item1">
//         <p>Content for Dropdown Item 1</p>
//     </TabPanel>
//     <TabPanel name="item2">
//         <p>Content for Dropdown Item 2</p>
//     </TabPanel>
// </Tabs>
