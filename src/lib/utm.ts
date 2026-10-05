
export type utfType = {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_content: string;
    utm_keyword: string;
    utm_matchtype: string;
    utm_term: string;
    utm_creative_format: string;
}

const storageKey = process.env.NEXT_PUBLIC_STORAGE_KEY ?? "utm_tracking_data";

export const captureUtf = () => {
    if (typeof window === 'undefined') return;

    const getParams = new URLSearchParams(window.location.search);

    const hasParams = getParams.has('utm_source') || getParams.has('utm_medium') || getParams.has('utm_campaign') || getParams.has('utm_content') || getParams.has('utm_keyword') || getParams.has('utm_matchtype') || getParams.has('utm_term') || getParams.has('utm_creative_format');

    if (!hasParams) return;

    const keyExists = sessionStorage.getItem(storageKey);

    if (keyExists) return;

    const utfData: utfType = {
        utm_source: getParams.get('utm_source') ?? "",
        utm_medium: getParams.get('utm_medium') ?? "",
        utm_campaign: getParams.get('utm_campaign') ?? "",
        utm_content: getParams.get('utm_content') ?? "",
        utm_keyword: getParams.get('utm_keyword') ?? "",
        utm_matchtype: getParams.get('utm_matchtype') ?? "",
        utm_term: getParams.get('utm_term') ?? "",
        utm_creative_format: getParams.get('utm_creative_format') ?? "",
    }

    sessionStorage.setItem(storageKey, JSON.stringify(utfData));



}