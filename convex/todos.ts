import { mutationGeneric, queryGeneric } from "convex/server";
import { v } from "convex/values";

export const list = queryGeneric({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("todos").order("desc").collect();
  },
});

export const add = mutationGeneric({
  args: {
    text: v.string(),
  },
  handler: async (ctx, args) => {
    const text = args.text.trim();

    if (!text) {
      throw new Error("Todo text is required.");
    }

    await ctx.db.insert("todos", {
      text,
      createdAt: Date.now(),
    });
  },
});
