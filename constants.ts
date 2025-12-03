import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'hydro-x',
    name: 'Hydro-X',
    tagline: 'Ultimate Environmental Automation.',
    description: 'The Hydro-X system is your professional-grade foundation for success. It replaces multiple controllers with centralized, plug-and-play command, allowing you to automatically manage temperature, humidity, CO2 levels, and lighting schedules. Achieve the perfect Vapor Pressure Deficit (VPD) and monitor your settings 24/7 from anywhere using the free TrolMaster App.',
    features: [
      'Centralized, plug-and-play command',
      'Manage Temp, Humidity, CO2 & Lighting',
      'Achieve perfect Vapor Pressure Deficit (VPD)',
      '24/7 Remote Monitoring via App'
    ],
    imageUrl: 'https://picsum.photos/800/800?random=10', 
    link: '#',
    theme: 'light'
  },
  {
    id: 'aqua-x',
    name: 'Aqua-X',
    tagline: 'Precision Irrigation. Total Control.',
    description: 'Stop watering blindly and start growing with data. This platform eliminates uncertainty by providing unparalleled precision in managing water, nutrients, and media conditions. Unlock advanced Crop Steering by automatically activating irrigation based on real-time grow medium moisture levels (Feed on Demand), all while receiving instant alerts on pH, EC, or temperature fluctuations.',
    features: [
      'Advanced Crop Steering (Feed on Demand)',
      'Real-time medium moisture activation',
      'Instant pH, EC, and Temperature alerts',
      'Guaranteed crop protection'
    ],
    imageUrl: 'https://picsum.photos/800/800?random=11', 
    link: '#',
    theme: 'dark'
  },
  {
    id: 'thinkgrow',
    name: 'ThinkGrow',
    tagline: 'The Digital Standard for Lighting.',
    description: 'Illuminate your future of profitability with ThinkGrow horticulture lighting, powered by TrolMaster technology. Designed for massive scale, this digital platform allows surgical control over plant development. It eliminates the "night risk" associated with legacy analog systems, ensuring lights stay off during the dark period and protecting your highly sensitive photoperiod crops.',
    features: [
      'Surgical control over plant development',
      'Eliminates analog "night risk"',
      'Designed for massive scale',
      'Powered by TrolMaster technology'
    ],
    imageUrl: 'https://picsum.photos/800/800?random=12', 
    link: '#',
    theme: 'light'
  },
  {
    id: 'aero-fan',
    name: 'Aero-Fan',
    tagline: 'Microclimate Mastery.',
    description: 'Ensure optimal plant health with Aero-Fan precision indoor airflow management. Stop compromising your plants with unpredictable airflow by using precise speed tuning to achieve the light breeze required for optimal plant respiration. Simplify your operation with digital group control to customize wind speeds across different zones and eliminate harmful microclimate pockets.',
    features: [
      'Precise speed tuning for optimal respiration',
      'Digital group control across zones',
      'Eliminate harmful microclimate pockets',
      'Quiet operation with powerful movement'
    ],
    imageUrl: 'https://picsum.photos/800/800?random=13', 
    link: '#',
    theme: 'dark'
  }
];