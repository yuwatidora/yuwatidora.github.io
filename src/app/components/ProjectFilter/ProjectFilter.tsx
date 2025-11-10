import styles from "./ProjectFilter.module.css"

interface ProjectFilterProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

export default function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
    const filters = ["All", "Web/Mobile", "AI/ML", "Robotics", "Game"];

    return (
        <div className={styles.filter_container}>
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={`${styles.filter_button} ${activeFilter === filter ? styles.active : ''}`}
                    onClick={() => onFilterChange(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
