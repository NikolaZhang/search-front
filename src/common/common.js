const isEmpty = (o) => {
    return o === undefined || o == null || o === "";
}
const isTrimEmpty = (o) => {
    return o === undefined || o == null || o.trim() === "";
}

export default {
    jsonToGetRequestParam: (form, pageSize, pageCurrent) => {
        let paramStr = '?';
        if(!isEmpty(pageSize) && !isEmpty(pageCurrent)) {
            paramStr += 'page_size=' + pageSize + '&page_current=' + pageCurrent
        }
        if (!isEmpty(form)) {
            for (let element in form) {
                paramStr += element + '=' + form[element] + '&';
            }
        }
        return paramStr;
    },
 
}



// test
// let form = {username: "zhangxu", age: 123}
// jsonToGetRequestParam(form);