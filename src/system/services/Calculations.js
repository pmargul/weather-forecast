import Translations from "../settings/Translations";

export const GetWeekDaysLabels=(lang, daysAmount = 5)=>{
    const result = [];
    const currentTime = new Date();
    for(let i = 0; i < daysAmount; i++){
        const date = new Date(currentTime);
        date.setDate(date.getDate()+i);

        result.push(Translations.days[date.getDay()]);
    }
    return result;
}