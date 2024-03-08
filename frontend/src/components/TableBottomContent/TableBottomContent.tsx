import { Pagination } from "@nextui-org/react"

interface TableBottomContentProps {
    isDisabled: boolean
    page: number
    total: number
    onChange: (page: number) => void
}
const TableBottomContent: React.FC<TableBottomContentProps> = ({ isDisabled, page, total, onChange }) => {
    return (
        <div className="py-2 px-2 flex flex-col   justify-between items-center">
            <Pagination
                showControls
                classNames={{
                    cursor: "bg-foreground text-background",
                }}
                color="default"
                isDisabled={isDisabled}
                page={page}
                total={total}
                variant="light"
                onChange={onChange}
            />
        </div>
    )
}

export default TableBottomContent