import {format, parse} from "date-fns";
import {ru} from "date-fns/locale";

const formatDate = (departureDate) => {
    const date = parse(departureDate, "dd.MM.yy", new Date());

    return format(date, "d MMM yyyy, EEE", { locale: ru });
};

export default formatDate