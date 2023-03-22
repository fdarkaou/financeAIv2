import { supabase, currentUser } from "../supabase";
import { metricOptions } from "@/stores/metricOptions";


// Function used for fetching the asset data - TableMarketCap.vue
export async function fetchAssetData(assets) {
  try {
    // Fetch the asset data for all coins from the Supabase DB
    let { data: jsoncoin, errors } = await supabase
      .from('jsoncoin')
      .select('payload')
      .order('id', { ascending: false });

    if (errors) return console.error("result" + errors);
    // Fetch the logos from the Supabase DB
    let { data: logos, error } = await supabase
      .from('ultimateframe')
      .select('logo, symbol');

    if (error) return console.error("result" + error);
    // Map the logos to the symbols
    assets = jsoncoin[0]['payload'].map(asset => {
      let logo = logos.find(logo => logo.symbol === asset.symbol);
      if(logo) {
        asset.logo = logo.logo;
      } else {
        asset.logo = "https://cdn4.iconfinder.com/data/icons/leto-weather/64/na_not_available_weather_sun-512.png";
      }
      return asset;
    });
    assets = assets.filter(asset => {
      return !isNaN(asset.price) && !isNaN(asset.new_marketcap);
    });
    assets = assets.filter(asset => {
      return asset.price !== null && asset.new_marketcap !== null;
    });
    assets = assets.filter(asset => {
      return asset.price !== 0 && asset.new_marketcap !== 0;
    });

    return { assets };
  } catch (error) {
    console.error("Following errors were found: ", error);
    this.errors = error.message;
  }
}
// Function used for fetching the asset data + filter on NaN values- TableTVLFees.vue

export async function fetchFilteredAssetData(assets, metric) {
  try {
  // Fetch the asset data for all coins and logos from the Supabase DB
  let { data: jsoncoin, errors } = await supabase
  .from('jsoncoin')
  .select('payload')
  .order('id', { ascending: false });

  let { data: logos, error } = await supabase
  .from('ultimateframe')
  .select('logo, symbol');
  
  if (errors) return console.error("result" + errors);

  // Update the assets object with the data for the current coin and add logos
  assets = jsoncoin[0]['payload'].filter(asset => !isNaN(asset[metric]) && asset[metric] !== 0)
  assets.sort((a, b) => b[metric] - a[metric]);
  
  assets = assets.map(asset => {
    let logo = logos.find(logo => logo.symbol === asset.symbol);
    if(logo) {
      asset.logo = logo.logo;
    } else {
      asset.logo = "https://cdn4.iconfinder.com/data/icons/leto-weather/64/na_not_available_weather_sun-512.png";
    }
    return asset;
  });

  return {assets};
} catch (error) {
  console.error("Following errors were found: ", error);
  this.errors = error.message;
  }
  }    

// Function used for fetching assets within a specific category - TableCategory.vue
export async function fetchSectorAssets(sector) {
  try {
  // Fetch data from the 'ultimateframe' table
  let { data: ultimateframe, error: frameError } = await supabase
  .from('ultimateframe')
  .select('symbol, logo')
  .eq('messari_sector', sector);

  if(frameError) return console.error("result" + frameError);

  // Get the symbols and logos that match the "Infrastructure" category
  let symbolsAndLogos = ultimateframe.map(item => ({ symbol: item.symbol, logo: item.logo }));
  
  // Fetch data from the 'jsoncoin' table for the matching symbols
  let { data: jsoncoin, errors: coinErrors } = await supabase
    .from('jsoncoin')
    .select('payload')
    .order('id', { ascending: false });
  
  if (coinErrors) return console.error("result" + coinErrors);
  
  // Return the matching data and map logos to symbols
  let assets = jsoncoin[0]['payload'].filter(item => symbolsAndLogos.find(s => s.symbol === item.symbol));
  assets = assets.map(asset => {
    let logo = symbolsAndLogos.find(logo => logo.symbol === asset.symbol);
    asset.logo = logo.logo ? logo.logo : "https://cdn4.iconfinder.com/data/icons/leto-weather/64/na_not_available_weather_sun-512.png";
    return asset;
  });
  return { assets };
} catch (error) {
  console.error("Following errors were found: ", error);
  this.errors = error.message;
  }
  }  

// Function used to format the values in the table - TableMarketCap.vue
export function formatValue(asset, metric) {
    // Get the value from the assets object
    let value = (asset || asset === 0) ? asset : 'N/A';
    if (value === 'N/A') {
      // value is not a number or is null or undefined
      // handle the case where value is 'N/A'
    } else if (value === 0) {
      // handle the case where value is 0
    }  
    // Check if the value is null
    if (isNaN(value)) {
      return 'N/A';
    }
  
    // Check if the metric is one of the metrics that should be formatted as currency
    if ([
        'price', 'price_btc', 'price_eth', 
        'marketcap', 'liquid_marketcap_usd',
        'volume_last_24_hours', 'real_volume_last_24_hours',
        'fee_total24h', 'fee_total7d', 'fee_totalAlltime', 
        'fee_total30d', 
        'tvl',
        'all_time_high', 'cycle_low',

    ].includes(metric)) {
      // Round the value to two decimals and format it as currency
      return Number(value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
  
    // Check if the metric is one of the metrics that should be formatted as percentage
    if ([
    'roi_2011_usd_percent','roi_2012_usd_percent','roi_2013_usd_percent','roi_2014_usd_percent','roi_2015_usd_percent','roi_2016_usd_percent','roi_2017_usd_percent','roi_2018_usd_percent','roi_2019_usd_percent','roi_2020_usd_percent','roi_2021_usd_percent','roi_2022_usd_percent',
    'percent_down_since_ath', 'percent_up_since_cycle_low', 
    'percent_change_btc_last_24_hours', 'percent_change_btc_last_1_week', 'percent_change_btc_last_1_month', 'percent_change_btc_last_3_months', 'percent_change_btc_last_1_year', 
    'percent_change_eth_last_24_hours', 'percent_change_eth_last_1_week', 'percent_change_eth_last_1_month', 'percent_change_eth_last_3_months', 'percent_change_eth_last_1_year',
    'percent_change_usd_last_24_hours', 'percent_change_last_1_week', 'percent_change_last_1_month', 'percent_change_last_3_months', 'percent_change_last_1_year', 
    'percent_change_month_to_date', 'percent_change_quarter_to_date', 'percent_change_year_to_date',
    'fee_change_1d', 'fee_change_7d', 'fee_change_1m', 
    'tvl_change_1h', 'tvl_change_1d', 'tvl_change_7d'
      ].includes(metric)) {
      // / Round the value to two decimals and format it as percentage
      return `<span class="${value >= 0 ? 'positive' : 'negative'}">${Number(value).toFixed(2)}%</span>`;
      }  
      
    // For all other metrics, round the value to two decimals and format it with a thousand separator
    return Number(value).toLocaleString('en-US');
    
}

// Formatvalue but for Custom Dashboards
export function formatValueCustom(coin, metric) {
    // Get the value from the assets object
    let value = this.assets[coin] && this.assets[coin] ? this.assets[coin][metric] : 'N/A';
  
    // Check if the value is null
    if (value === undefined) {
      return 'N/A';
    }
  
    // Check if the metric is one of the metrics that should be formatted as currency
    if ([
        'price', 'price_btc', 'price_eth', 
        'marketcap', 'liquid_marketcap_usd',
        'volume_last_24_hours', 'real_volume_last_24_hours',
        'fee_total24h', 'fee_total7d', 'fee_totalAlltime', 
        'tvl',
        'all_time_high', 'cycle_low',

].includes(metric)) {
      // Round the value to two decimals and format it as currency
      return Number(value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
  
    // Check if the metric is one of the metrics that should be formatted as percentage
    if ([
    'roi_2011_usd_percent','roi_2012_usd_percent','roi_2013_usd_percent','roi_2014_usd_percent','roi_2015_usd_percent','roi_2016_usd_percent','roi_2017_usd_percent','roi_2018_usd_percent','roi_2019_usd_percent','roi_2020_usd_percent','roi_2021_usd_percent','roi_2022_usd_percent',
    'percent_down_since_ath', 'percent_up_since_cycle_low', 
    'percent_change_btc_last_24_hours', 'percent_change_btc_last_1_week', 'percent_change_btc_last_1_month', 'percent_change_btc_last_3_months', 'percent_change_btc_last_1_year', 
    'percent_change_eth_last_24_hours', 'percent_change_eth_last_1_week', 'percent_change_eth_last_1_month', 'percent_change_eth_last_3_months', 'percent_change_eth_last_1_year',
    'percent_change_usd_last_24_hours', 'percent_change_last_1_week', 'percent_change_last_1_month', 'percent_change_last_3_months', 'percent_change_last_1_year', 
    'percent_change_month_to_date', 'percent_change_quarter_to_date', 'percent_change_year_to_date',
    'fee_change_1d', 'fee_change_7d', 'fee_change_1m', 
    'tvl_change_1h', 'tvl_change_1d', 'tvl_change_7d'
      ].includes(metric)) {
      // / Round the value to two decimals and format it as percentage
      return `<span class="${value >= 0 ? 'positive' : 'negative'}">${Number(value).toFixed(2)}%</span>`;
      }  
      
    // For all other metrics, round the value to two decimals and format it with a thousand separator
    return Number(value).toLocaleString('en-US');
  }
// Function used to check available cryptocurrencies for Dashboard Building - MyDashboardsForm.vue
export async function checkAvailableCoins() {
  try {
    // Fetch the asset data for all coins from the Supabase DB
    let { data, errors } = await supabase
      .from("jsoncoin")
      .select("payload")
      .order("id", { ascending: false });

    if (errors) {
      return console.error("Error:" + errors);
    }
    const sortedAssets = data[0].payload.sort((a, b) => b.new_marketcap - a.new_marketcap);

    return sortedAssets.map(asset => {
      return {
        symbol: asset.symbol,
        name: asset.name
      };
    });
  } catch (error) {
    console.error("Following errors were found: ", error);
    this.errors = error.message;
  }
}

// Function to get the USER ID from the Supabase DB - MyDashboardsForm.vue
export async function getUserInfo() {
  // Get currentUser variable from supabase.js and assign it to the user variable
  //console.log("UserID: ", currentUser._rawValue);
  return currentUser._rawValue;
}

export const generateJSON = (dashboardName, dashboardDescription, selectedCoins, selectedMetrics, selectedTVLchains, selectedTVLprotocols) => {
  const jsonData = {
    dashboardName: dashboardName,
    dashboardDescription: dashboardDescription,
    selectedCoins: selectedCoins,
    selectedMetrics: selectedMetrics,
    selectedTVLchains: selectedTVLchains,
    selectedTVLprotocols: selectedTVLprotocols
  };
  return jsonData;
};

export async function checkAvailableMetrics(symbol) {
  // Fetch the asset data for all coins from the Supabase DB
  let { data: jsoncoin, errors } = await supabase
    .from('jsoncoin')
    .select('payload')
    .order('id', { ascending: false });

  // Filter the data for the selected symbol
  let selectedCoin = jsoncoin[0].payload.filter(coin => coin.symbol === symbol);
  if (selectedCoin.length === 0) {
    console.error("No data found for symbol: " + symbol);
    return;
  }
  let metrics = selectedCoin[0];

  // Get the numeric metrics that are not equal to 0 or null
  let availableMetrics = Object.keys(metrics)
  .filter(metric => {
  const metricOption = metricOptions.find(option => option.id === metric);
  return (metrics[metric] !== 0 && metrics[metric] !== null && metricOption);
  })
  .map(metric => {
  const metricOption = metricOptions.find(option => option.id === metric);
  return {
  id: metric,
  label: metricOption.label
  };
  });
    
  return availableMetrics;
}
