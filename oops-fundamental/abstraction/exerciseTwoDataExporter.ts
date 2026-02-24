abstract class DataExporter {
    validate(data: string[]): boolean {
        if (!data || data.length === 0) {
            console.log("Export failed: No data to export.");
            return false;
        }
        console.log(`Validation passed. Exporting ${data.length} records.`);
        return true;
    }

    abstract export(data: string[]): void;
}

class CSVExporter extends DataExporter {
    export(data: string[]): void {
        if (!this.validate(data)) return;
        console.log("CSV: " + data.join(","));
    }
}

class JSONExporter extends DataExporter {
    export(data: string[]): void {
        if (!this.validate(data)) return;
        const items = data.map(item => `"${item}"`).join(", ");
        console.log(`JSON: [${items}]`);
    }
}

const csv = new CSVExporter();
csv.export(["Alice", "Bob", "Charlie"]);

console.log();

const json = new JSONExporter();
json.export(["Alice", "Bob", "Charlie"]);

console.log();

csv.export([]); // Should fail validation