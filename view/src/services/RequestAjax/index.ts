

const requestAjax = async (url:string, options:object) => {
    try {
        const getData = await fetch(url, options);
        const dataFound = getData.json();
        return dataFound;
        
    } catch (error) {
        console.error(error);
        return error;
    }

}

export default requestAjax;

