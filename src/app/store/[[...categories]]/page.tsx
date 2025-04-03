interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string;
    }
}

export default function Category(props: CategoryProps) {
    console.log(props);
    const {categories} = props.params;
    return(
        <h1>Category: {categories}</h1>
    );
}