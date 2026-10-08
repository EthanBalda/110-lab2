import { describe, it, expect } from "vitest";
import { music } from "./music";

describe("music", () => {
    it("should have at least 3 songs", () => {
        expect(music.length).toBeGreaterThanOrEqual(3);
    });

    it("should include POP DAT THING", () => {
        expect(music).toContain("POP DAT THING");
    });
});