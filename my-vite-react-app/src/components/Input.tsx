export default function Input({value, f}:any) {
    return (
      <input value={value} onChange={f} className="h-24 w-96" placeholder="What would you like to learn about your spotify data?" />
    );
}