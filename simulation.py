import random
import os

import matplotlib.pyplot as plt


def generate_path(
        steps,
        start_x=0,
        start_y=0,
        frame_step=50,
        output_dir="static",
        color="blue",
        label_prefix="Pod",
):
    x, y = start_x, start_y
    x_vals = [x]
    y_vals = [y]
    previous_move = random.randint(1, 4)

    for step in range(steps):
        move = random.randint(1, 4)
        while move == previous_move:
            move = random.randint(1, 4)

        length = random.uniform(0.01, 1.0)
        previous_move = move

        if move == 1:
            y += length
        elif move == 2:
            y -= length
        elif move == 3:
            x -= length
        elif move == 4:
            x += length

        x_vals.append(x)
        y_vals.append(y)

        if step % frame_step == 0 or step == steps - 1:
            save_frame(
                x_vals,
                y_vals,
                step,
                color=color,
                label=label_prefix,
                output_dir=output_dir,
            )

    return x_vals, y_vals


def save_frame(x1, y1, step, x2=None, y2=None, color="blue", label="Pod", output_dir="static"):
    plt.figure(figsize=(8, 8))
    plt.plot(x1, y1, color=color, linewidth=1, label=f"{label} 1")
    plt.scatter([x1[0]], [y1[0]], color="green", s=80, zorder=5, label="Start 1")
    plt.scatter([x1[-1]], [y1[-1]], color="red", s=80, zorder=5, label="Konec 1")

    if x2 and y2:
        plt.plot(x2, y2, color="orange", linewidth=1, label=f"{label} 2")
        plt.scatter([x2[0]], [y2[0]], color="lime", s=80, zorder=5, label="Start 2")
        plt.scatter([x2[-1]], [y2[-1]], color="darkred", s=80, zorder=5, label="Konec 2")

    plt.title(f"Krok {step}")
    plt.axis("equal")
    plt.grid(True)
    plt.legend()
    frame_path = os.path.join(output_dir, f"frame_{step:04d}.png")
    plt.savefig(frame_path)
    plt.close()


def main():
    steps = 1000
    frame_step = 50
    output_dir = "static"

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    else:
        for f in os.listdir(output_dir):
            os.remove(os.path.join(output_dir, f))

    x1_vals, y1_vals = [0], [0]
    x2_vals, y2_vals = [0], [0]
    x1, y1 = 0, 0
    x2, y2 = 0, 0
    prev1 = random.randint(1, 4)
    prev2 = random.randint(1, 4)

    for step in range(steps):
        move1 = random.randint(1, 4)
        while move1 == prev1:
            move1 = random.randint(1, 4)

        len1 = random.uniform(0.01, 1.0)
        if move1 == 1: y1 += len1
        elif move1 == 2: y1 -= len1
        elif move1 == 3: x1 -= len1
        elif move1 == 4: x1 += len1
        x1_vals.append(x1)
        y1_vals.append(y1)
        prev1 = move1

        move2 = random.randint(1, 4)
        while move2 == prev2:
            move2 = random.randint(1, 4)

        len2 = random.uniform(0.01, 1.0)
        if move2 == 1: y2 += len2
        elif move2 == 2: y2 -= len2
        elif move2 == 3: x2 -= len2
        elif move2 == 4: x2 += len2
        x2_vals.append(x2)
        y2_vals.append(y2)
        prev2 = move2

        if step % frame_step == 0 or step == steps - 1:
            save_frame(
                x1_vals,
                y1_vals,
                step,
                x2_vals,
                y2_vals,
                output_dir=output_dir,
            )


if __name__ == "__main__":
    main()
