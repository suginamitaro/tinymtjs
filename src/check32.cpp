#include <iostream>
#include <iomanip>
#include <inttypes.h>
//#include <cstdio>
#include "tinymtJS.hpp"

int main(int argc, char * argv[]) {
    using namespace std;
    uint32_t seed = 1;
    uint32_t seed_array[6] = {1, 2, 3, 4, 5, 6};
    if (argc >= 2) {
        seed = (uint32_t)strtoul(argv[1], NULL, 0);
    }
    //printf(" seed = %d\n", seed);
    TinyMT32 tinymt(seed);
    //printf(" seedJS seed = %d\n", seed);
    tinymt.seedJS(seed);

    cout << "31-bit unsigned integers r, where 0 <= r < 2^31" << endl;
    for (int i = 0; i < 20; i++) {
        cout << tinymt.generate_uint31() << endl;
    }
    cout << "31-bit double r, where 0 <= r < 1.0" << endl;
    for (int i = 0; i < 20; i++) {
        cout << setprecision(10) << tinymt.generate_double31() << endl;
    }
    cout << "int r, where 0 <= r < 100" << endl;
    for (int i = 0; i < 20; i++) {
        cout << tinymt.getInt(100) << endl;
    }
    tinymt.seedJS(seed_array, 6);
    cout << "seed [1, 2, 3, 4, 5, 6]" << endl;
    //tinymt.seedJS(seed_array, 3);
    //printf("seed [1, 2, 3]\n");
    cout << "31-bit unsigned integers r, where 0 <= r < 2^31" << endl;
    for (int i = 0; i < 20; i++) {
        cout << tinymt.generate_uint31() << endl;
    }
    return 0;
}
