import Translations from "../settings/Translations";

export const GetWeekDaysLabels=(lang, daysAmount = 5)=>{
    const result = [];
    const currentTime = new Date();
    for(let i = 0; i < daysAmount; i++){
        const date = new Date(currentTime);
        date.setDate(date.getDate()+i);

        result.push(Translations.days[date.getDay()][lang]);
    }
    return result;
}

export const GetModeValue = (array) => {
    const mode = {};
    let max = 0, count = 0;
  
    for(let i = 0; i < array.length; i++) {
      const item = array[i];
      
      if(mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }
      
      if(count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }
     
    return max;
  };

  export const GetAvgValue = (array) => {
    let total = 0;

    for(let i = 0; i < array.length; i++) {
        total += parseFloat(array[i]);
    }
    return parseFloat(total/array.length).toFixed(2);
  };

  export const GetRawNumericValue = (str) => {
      return str.toString().replace(/[^\d.-]/g, '');
  }