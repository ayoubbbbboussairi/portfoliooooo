const ContactInfo = ({ title, info }: { title: string; info: string }) => {
  return (
    <div className="flex-center p-8 border-[2px] border-[var(--border)] group rounded-full border-dashed hover:border-[var(--main)] duration">
      <div className="space-y-2 text-center">
        <h3 className="tracking-wider text-lg font-semibold">{title}</h3>
        <p className="group-hover:text-[var(--main)]! duration">{info}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
