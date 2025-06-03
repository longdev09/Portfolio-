import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';

import { ListItemTab, ListProjects, ListSkill } from '../../../constant';
import CartProject from '../../common/CartProject';
import ItemSkill from '../../common/ItemSkill';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function Menu() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <AppBar position="static" className="!bg-[#09092640] !px-5  rounded-xl border  border-[#ffffff1a]">
                <Tabs
                    className=" rounded-xl"
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    sx={{
                        height: '100%',
                        '& .MuiTab-root': {
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            fontWeight: '600',
                            color: '#94a3b8',
                            textTransform: 'none',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            zIndex: 1,
                            margin: '8px',
                            borderRadius: '12px',
                            '&:hover': {
                                color: '#ffffff',
                                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                                transform: 'translateY(-2px)',
                                '& .lucide': {
                                    transform: 'scale(1.1) rotate(5deg)',
                                },
                            },
                            '&.Mui-selected': {
                                color: '#fff',
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))',
                                boxShadow: '0 4px 15px -3px rgba(139, 92, 246, 0.2)',
                                '& .lucide': {
                                    color: '#a78bfa',
                                },
                            },
                        },
                        '& .MuiTabs-indicator': {
                            height: 0,
                        },
                        '& .MuiTabs-flexContainer': {
                            gap: '8px',
                        },
                    }}
                >
                    {ListItemTab.map((item, index) => (
                        <Tab key={index} icon={item.icon} label={item.name} {...a11yProps(item.id)} />
                    ))}
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
                    {ListProjects.map((item, index) => (
                        <CartProject
                            title={item.name}
                            img={item.img}
                            describe={item.describe}
                            aos={item.aos}
                            aosDuraton={item.aosDuraton}
                            linkGit={item.linkGit}
                        />
                    ))}
                </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <div className="flex flex-wrap gap-6 justify-center">
                    {ListSkill.map((item, index) => (
                        <ItemSkill
                            img={item.img}
                            key={index}
                            name={item.name}
                            aos={item.aos}
                            duration={item.duration}
                        />
                    ))}
                </div>
            </TabPanel>
        </Box>
    );
}

function Portfolio() {
    return (
        <div className="overflow-hidden bg-[#030014]" id="Postfolio">
            <div className="px-4 container mx-auto mt-24 relative z-40 pb-5">
                <div className="flex flex-col items-center justify-center">
                    <span
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-darkPurple to-lightPurple bg-clip-text text-transparent"
                    >
                        Portfolio Showcase
                    </span>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto  mt-4 text-center"
                    >
                        Explore my journey through projects, certifications, and technical expertise. Each section
                        represents a milestone in my continuous learning path.
                    </p>
                </div>
                <div className="mt-6">
                    <Menu />
                </div>
            </div>
        </div>
    );
}
export default Portfolio;
