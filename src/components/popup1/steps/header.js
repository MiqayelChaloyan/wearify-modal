export default function Header({ title, className }) {
    return (
        <section className={className}>
            <h2 className='title'>{title}</h2>
            <div className='line' />
        </section>
    );
};
