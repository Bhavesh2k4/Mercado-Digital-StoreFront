
import { Input } from "@/components/ui/input";

interface props{
    minPrice?: string | null;
    maxPrice?: string | null;
    onMinPriceChange: (value: string) => void;
    onMaxPriceChange: (value: string) => void;
}

export const formatAsCurrency = (value: string) => {
    const numericvalue=value.replace(/[^0-9.]/g, '');
    const parts = numericvalue.split('.');
    const formattedValue = parts[0]+(parts.length>1 ? '.' + parts[1]?.slice(0,2) : '');
    if(!formattedValue) return '';
    const numberValue = parseFloat(formattedValue);
    if (isNaN(numberValue)) return '';
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(numberValue);
}

export const PriceFilter = ({minPrice,maxPrice,onMinPriceChange,onMaxPriceChange}:props) => {
    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue= e.target.value.replace(/[^0-9.]/g, '');
        onMinPriceChange(numericValue);
    }
    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue= e.target.value.replace(/[^0-9.]/g, '');
        onMaxPriceChange(numericValue);
    }
  return (
    <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
            <label className="font-medium text-base">
                <Input type="text" placeholder="₹ 0 " value={minPrice? formatAsCurrency(minPrice) : ''} onChange={handleMinPriceChange}>
                </Input>
            </label>

        </div>
        <div className="flex flex-col gap-2">
            <label className="font-medium text-base">
                <Input type="text" placeholder=" ₹ ∞ " value={maxPrice? formatAsCurrency(maxPrice) : ''} onChange={handleMaxPriceChange}>
                </Input>
            </label>

        </div>
    </div>
  )
}