
export type Props = {
    bg?: string,
    children?: React.ReactNode
}
export const Container: React.FC<Props> = ({ bg, children }: Props) => {
    return <section className={bg ? bg : "bg-gray"}>
        <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            {children}
        </div>
    </section>
}